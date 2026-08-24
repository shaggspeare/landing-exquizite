import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import i18n from './i18n';

export function render(url: string, lang: string) {
  i18n.changeLanguage(lang);
  return renderToStaticMarkup(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}
