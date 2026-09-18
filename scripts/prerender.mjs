// Runs after `vite build`. Renders every route x locale combination to static
// HTML so crawlers that don't execute JS (many LLM bots included) see real,
// localized content instead of the empty CSR shell. Client-side hydration is
// unaffected: index.tsx still does a plain createRoot() mount over this markup.
import { createServer } from 'vite';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
// The apex domain 307-redirects to www, so www is the canonical host.
const SITE_URL = 'https://www.calleo.xyz';

const ROUTE_SUFFIX = {
  home: '',
  'privacy-policy': '/privacy-policy',
  support: '/support',
  terms: '/terms',
  cookies: '/cookies',
};

function localeUrlPath(lang, page) {
  const prefix = lang === 'en' ? '' : `/${lang}`;
  const p = `${prefix}${ROUTE_SUFFIX[page]}`;
  return p === '' ? '/' : p;
}

function setAttr(html, selector, attr, value) {
  // selector examples: 'link[rel="canonical"]', 'meta[property="og:url"]', 'link[hreflang="de"]'
  const match = selector.match(/^(\w+)\[([\w:-]+)="([^"]+)"\]$/);
  if (!match) return html;
  const [, tag, matchAttr, matchValue] = match;
  const re = new RegExp(`(<${tag}\\b[^>]*\\b${matchAttr}="${matchValue}"[^>]*\\b${attr}=")[^"]*(")`);
  if (!re.test(html)) return html;
  return html.replace(re, `$1${value.replace(/\$/g, '$$$$')}$2`);
}

async function main() {
  const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
  const appJsonLdTemplate = template.match(
    /<script type="application\/ld\+json" id="app-jsonld">([\s\S]*?)<\/script>/
  )[1];

  const vite = await createServer({
    root,
    appType: 'custom',
    server: { middlewareMode: true },
    resolve: {
      // Vite's SSR module runner mishandles this package's default (CJS) export
      // condition; point it at the real ESM build so named imports work as-is.
      alias: { 'react-router-dom': path.join(root, 'node_modules/react-router-dom/dist/index.mjs') },
    },
  });

  const { render } = await vite.ssrLoadModule('/entry-server.tsx');
  const { languageCodes, ogLocale } = await vite.ssrLoadModule('/i18n.ts');

  let count = 0;

  for (const lang of languageCodes) {
    for (const page of Object.keys(ROUTE_SUFFIX)) {
      const urlPath = localeUrlPath(lang, page);
      const appHtml = render(urlPath, lang);

      const bundle = JSON.parse(fs.readFileSync(path.join(root, 'locales', lang, 'translation.json'), 'utf-8'));

      let title;
      let description;
      if (page === 'home') {
        title = `${bundle.hero.titleLine1} ${bundle.hero.titleLine2} · Calleo`;
        description = bundle.hero.subtitle;
      } else if (page === 'support') {
        title = bundle.support.title;
      } else {
        title = `${bundle[page === 'privacy-policy' ? 'privacyPolicy' : page].title} · Calleo`;
      }

      const canonicalUrl = `${SITE_URL}${urlPath}`;

      let html = template;
      html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
      html = html.replace(/<html lang="[^"]*"/, `<html lang="${lang}"${lang === 'ar' ? ' dir="rtl"' : ''}`);
      html = html.replace(/<title>.*?<\/title>/, `<title>${title}</title>`);
      html = setAttr(html, 'link[rel="canonical"]', 'href', canonicalUrl);
      html = setAttr(html, 'meta[property="og:url"]', 'content', canonicalUrl);
      html = setAttr(html, 'meta[name="twitter:url"]', 'content', canonicalUrl);
      html = setAttr(html, 'meta[property="og:title"]', 'content', title);
      html = setAttr(html, 'meta[name="twitter:title"]', 'content', title);
      const ogLocaleBlock = [
        `<meta property="og:locale" content="${ogLocale(lang)}"/>`,
        ...languageCodes
          .filter((code) => code !== lang)
          .map((code) => `<meta property="og:locale:alternate" content="${ogLocale(code)}"/>`),
      ].join('');
      html = html.replace(
        /<meta property="og:locale"[^>]*>(\s*<meta property="og:locale:alternate"[^>]*>)*/,
        ogLocaleBlock
      );
      if (description) {
        html = setAttr(html, 'meta[name="description"]', 'content', description);
        html = setAttr(html, 'meta[property="og:description"]', 'content', description);
        html = setAttr(html, 'meta[name="twitter:description"]', 'content', description);
      }
      for (const code of languageCodes) {
        html = setAttr(html, `link[hreflang="${code}"]`, 'href', `${SITE_URL}${localeUrlPath(code, page)}`);
      }
      html = setAttr(html, 'link[hreflang="x-default"]', 'href', `${SITE_URL}${localeUrlPath('en', page)}`);

      const appJsonLd = JSON.parse(appJsonLdTemplate);
      appJsonLd.url = canonicalUrl;
      appJsonLd.description = bundle.hero.subtitle;
      appJsonLd.inLanguage = lang;
      html = html.replace(
        /(<script type="application\/ld\+json" id="app-jsonld">)[\s\S]*?(<\/script>)/,
        `$1${JSON.stringify(appJsonLd)}$2`
      );

      if (page === 'home') {
        const faqJsonLd = JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: bundle.faq.items.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
          })),
        });
        html = html.replace(
          /(<script type="application\/ld\+json" id="faq-jsonld">)[\s\S]*?(<\/script>)/,
          `$1${faqJsonLd}$2`
        );
      }

      const outDir = path.join(distDir, urlPath === '/' ? '' : urlPath.slice(1));
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, 'index.html'), html);
      count += 1;
    }
  }

  const today = new Date().toISOString().slice(0, 10);
  const urls = [];
  for (const page of Object.keys(ROUTE_SUFFIX)) {
    for (const lang of languageCodes) {
      const alternates = [
        ...languageCodes.map(
          (code) => `    <xhtml:link rel="alternate" hreflang="${code}" href="${SITE_URL}${localeUrlPath(code, page)}"/>`
        ),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${localeUrlPath('en', page)}"/>`,
      ].join('\n');
      urls.push(
        [
          '  <url>',
          `    <loc>${SITE_URL}${localeUrlPath(lang, page)}</loc>`,
          `    <lastmod>${today}</lastmod>`,
          `    <priority>${page === 'home' ? (lang === 'en' ? '1.0' : '0.8') : '0.5'}</priority>`,
          alternates,
          '  </url>',
        ].join('\n')
      );
    }
  }
  fs.writeFileSync(
    path.join(distDir, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`
  );

  await vite.close();
  console.log(`Prerendered ${count} pages and a sitemap with ${urls.length} URLs.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
