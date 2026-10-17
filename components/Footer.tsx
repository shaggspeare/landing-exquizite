import React from 'react';
import { useData } from '../hooks/useData';
import { useLanguagePrefix } from '../hooks/useLanguagePrefix';
import { Link } from 'react-router-dom';
import { LanguageMenu } from './Navbar';
import { ICON_SRC } from './ui';

const Footer: React.FC = () => {
  const data = useData();
  const d = data.footer;
  const prefix = useLanguagePrefix();
  const home = prefix || '/';

  // links carry either `to` (an in-app route, language-prefixed) or `href`;
  // `#section` hrefs point at the home page so they work from every route
  const renderLink = (link: { label: string; to?: string; href?: string }, i: number) => (
    <li key={i}>
      {link.to ? (
        <Link to={`${prefix}${link.to}`}>{link.label}</Link>
      ) : (
        <a href={link.href?.startsWith('#') ? `${home}${link.href}` : link.href}>{link.label}</a>
      )}
    </li>
  );

  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <a className="brand" href={`${home}#top`}>
              <img src={ICON_SRC} alt="" width={38} height={38} loading="lazy" />
              <span>{d.brandName}</span>
            </a>
            <p>{d.brandDescription}</p>
            <LanguageMenu up long />
          </div>
          <nav className="foot-cols" aria-label={data.a11y.footerNav}>
            {(['product', 'support', 'legal'] as const).map((key) => (
              <div key={key}>
                <h2>{d.columns[key].title}</h2>
                <ul>{d.columns[key].links.map(renderLink)}</ul>
              </div>
            ))}
          </nav>
        </div>
        <span className="foot-mark" aria-hidden="true">{d.brandName}</span>
        <div className="foot-bot">
          <span>{d.copyright.replace('{{year}}', String(new Date().getFullYear()))}</span>
          <span>calleo.xyz</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
