// Runs after prerendering. Fails the build if the shipped HTML regresses on
// the things that are easy to break silently: invalid JSON-LD, a canonical on
// the wrong host, an incomplete hreflang set, images without alt/dimensions,
// or copy we deliberately removed.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const distDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const HOST = 'https://www.calleo.xyz';
const LANGS = ['en', 'de', 'es', 'fr', 'it', 'pl', 'uk', 'ru', 'zh', 'ko', 'ar', 'pt', 'tr', 'id'];
// "exquizite" is not banned: the contact mailbox is still the old-brand address
// on purpose, until a Calleo one exists. See README.
const BANNED = ['Word Tinder', 'thousands of learners', 'free tier', 'href="#"'];

const errors = [];
const check = (ok, msg) => { if (!ok) errors.push(msg); };

function htmlFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) return htmlFiles(p);
    return e.name === 'index.html' ? [p] : [];
  });
}

const pages = htmlFiles(distDir);
check(pages.length === LANGS.length * 5, `expected ${LANGS.length * 5} pages, found ${pages.length}`);

for (const file of pages) {
  const rel = path.relative(distDir, file);
  const html = fs.readFileSync(file, 'utf-8');

  for (const banned of BANNED) {
    check(!html.includes(banned), `${rel}: contains "${banned}"`);
  }

  // JSON-LD must parse and be typed
  const blocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
  check(blocks.length >= 1, `${rel}: no JSON-LD`);
  for (const [, json] of blocks) {
    let parsed;
    try {
      parsed = JSON.parse(json);
    } catch (err) {
      errors.push(`${rel}: JSON-LD does not parse (${err.message})`);
      continue;
    }
    check(parsed['@context'] === 'https://schema.org', `${rel}: JSON-LD missing @context`);
    check(Boolean(parsed['@type']), `${rel}: JSON-LD missing @type`);
    if (parsed['@type'] === 'SoftwareApplication') {
      for (const key of ['name', 'operatingSystem', 'applicationCategory', 'offers', 'installUrl', 'url']) {
        check(Boolean(parsed[key]), `${rel}: SoftwareApplication missing ${key}`);
      }
      check(parsed.offers.price === '0', `${rel}: SoftwareApplication is not free`);
      check(!parsed.aggregateRating, `${rel}: SoftwareApplication has an aggregateRating we cannot back up`);
    }
    if (parsed['@type'] === 'FAQPage') {
      check(parsed.mainEntity?.length > 0, `${rel}: FAQPage has no questions`);
    }
  }

  // one host, self-referencing canonical, complete hreflang set
  const expected = `${HOST}/${rel.replace(/index\.html$/, '').replace(/\/$/, '')}`;
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  check(canonical === expected, `${rel}: canonical is ${canonical}, expected ${expected}`);
  for (const [tag, attr] of [['og:url', 'property'], ['twitter:url', 'name']]) {
    const url = html.match(new RegExp(`<meta ${attr}="${tag}" content="([^"]+)"`))?.[1];
    check(url === expected, `${rel}: ${tag} is ${url}, expected ${expected}`);
  }
  check(!/https:\/\/calleo\.xyz/.test(html), `${rel}: links to the redirecting apex host`);
  for (const lang of [...LANGS, 'x-default']) {
    check(html.includes(`hreflang="${lang}"`), `${rel}: missing hreflang ${lang}`);
  }
  const ogLocales = [...html.matchAll(/<meta property="og:locale(?::alternate)?" content="([^"]+)"/g)];
  check(ogLocales.length === LANGS.length, `${rel}: ${ogLocales.length} og:locale tags, expected ${LANGS.length}`);
  check(/^[a-z]{2}_[A-Z]{2}$/.test(ogLocales[0]?.[1] ?? ''), `${rel}: og:locale is not a locale code`);

  // every image is described and reserves its space
  for (const [tag] of html.matchAll(/<img\b[^>]*>/g)) {
    for (const attr of ['alt', 'width', 'height']) {
      check(new RegExp(`\\b${attr}="`).test(tag), `${rel}: <img> without ${attr}: ${tag.slice(0, 90)}`);
    }
  }
}

const sitemap = fs.readFileSync(path.join(distDir, 'sitemap.xml'), 'utf-8');
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
check(locs.length === LANGS.length * 5, `sitemap has ${locs.length} URLs, expected ${LANGS.length * 5}`);
check(locs.every((l) => l.startsWith(HOST)), 'sitemap has URLs on another host');
for (const page of ['/terms', '/cookies']) {
  check(locs.includes(`${HOST}${page}`), `sitemap is missing ${page}`);
}
check(
  fs.readFileSync(path.join(distDir, 'robots.txt'), 'utf-8').includes(`Sitemap: ${HOST}/sitemap.xml`),
  'robots.txt does not point at the sitemap'
);

if (errors.length) {
  console.error(`\n${errors.length} problem(s) in dist/:`);
  for (const e of errors.slice(0, 40)) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(`Checked ${pages.length} pages and ${locs.length} sitemap URLs: OK.`);
