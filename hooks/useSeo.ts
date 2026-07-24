import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useData } from './useData';
import { languageCodes } from '../i18n';

export type SeoPage = 'home' | 'privacy-policy' | 'support';

const ROUTE_SUFFIX: Record<SeoPage, string> = {
  home: '',
  'privacy-policy': '/privacy-policy',
  support: '/support',
};

const SITE_URL = 'https://calleo.xyz';

function localeUrl(lang: string, page: SeoPage) {
  const prefix = lang === 'en' ? '' : `/${lang}`;
  const path = `${prefix}${ROUTE_SUFFIX[page]}`;
  return `${SITE_URL}${path === '' ? '/' : path}`;
}

function setAttr(selector: string, attr: string, value: string) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

/** Updates document title, meta description, canonical and hreflang alternates
 *  for the current route + language. Progressive enhancement only — the static
 *  tags baked into index.html remain the fallback for non-JS crawlers. */
export function useSeo(page: SeoPage) {
  const { i18n } = useTranslation();
  const data = useData();
  const lang = i18n.language;

  useEffect(() => {
    let title: string;
    let description: string | undefined;

    if (page === 'home') {
      title = `${data.hero.titleLine1} ${data.hero.titleLine2} · Calleo`;
      description = data.hero.subtitle;
    } else if (page === 'privacy-policy') {
      title = `${data.privacyPolicy.title} · Calleo`;
    } else {
      title = data.support.title;
    }

    document.title = title;
    if (description) {
      setAttr('meta[name="description"]', 'content', description);
      setAttr('meta[property="og:description"]', 'content', description);
      setAttr('meta[name="twitter:description"]', 'content', description);
    }

    const canonicalUrl = localeUrl(lang, page);
    setAttr('link[rel="canonical"]', 'href', canonicalUrl);
    setAttr('meta[property="og:url"]', 'content', canonicalUrl);
    setAttr('meta[name="twitter:url"]', 'content', canonicalUrl);
    setAttr('meta[property="og:title"]', 'content', title);
    setAttr('meta[name="twitter:title"]', 'content', title);
    setAttr('meta[property="og:locale"]', 'content', lang);

    languageCodes.forEach((code) => {
      setAttr(`link[hreflang="${code}"]`, 'href', localeUrl(code, page));
    });
    setAttr('link[hreflang="x-default"]', 'href', localeUrl('en', page));
  }, [page, lang, data]);
}
