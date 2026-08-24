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
const SITE_URL = 'https://calleo.xyz';

const ROUTE_SUFFIX = { home: '', 'privacy-policy': '/privacy-policy', support: '/support' };

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
  const { languageCodes } = await vite.ssrLoadModule('/i18n.ts');

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
      } else if (page === 'privacy-policy') {
        title = `${bundle.privacyPolicy.title} · Calleo`;
      } else {
        title = bundle.support.title;
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
      html = setAttr(html, 'meta[property="og:locale"]', 'content', lang);
      if (description) {
        html = setAttr(html, 'meta[name="description"]', 'content', description);
        html = setAttr(html, 'meta[property="og:description"]', 'content', description);
        html = setAttr(html, 'meta[name="twitter:description"]', 'content', description);
      }
      for (const code of languageCodes) {
        html = setAttr(html, `link[hreflang="${code}"]`, 'href', `${SITE_URL}${localeUrlPath(code, page)}`);
      }
      html = setAttr(html, 'link[hreflang="x-default"]', 'href', `${SITE_URL}${localeUrlPath('en', page)}`);

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

  await vite.close();
  console.log(`Prerendered ${count} pages.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
