import React, { useRef, useState } from 'react';
import { useData } from '../hooks/useData';
import { useLanguagePrefix } from '../hooks/useLanguagePrefix';
import { useTranslation } from 'react-i18next';
import { supportedLanguages } from '../i18n';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Icon, ICON_SRC } from './ui';

/** Globe chip + language list. The list is always rendered (hidden when
 *  closed) so every language URL is a real, crawlable <a href>. */
export const LanguageMenu: React.FC<{ up?: boolean; long?: boolean }> = ({ up, long }) => {
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();
  const a11y = useData().a11y;
  const location = useLocation();
  const navigate = useNavigate();
  const current = supportedLanguages.find((l) => l.code === i18n.language) || supportedLanguages[0];

  const pathFor = (code: string) => {
    const parts = location.pathname.split('/').filter(Boolean);
    if (parts.length > 0 && supportedLanguages.some((l) => l.code === parts[0])) parts.shift();
    const rest = parts.length > 0 ? `/${parts.join('/')}` : '';
    return `${code === 'en' ? '' : `/${code}`}${rest}` || '/';
  };

  return (
    <div className={`lang${up ? ' lang-up' : ''}`} onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}>
      <button
        type="button"
        className="chip"
        aria-label={`${a11y.language}: ${current.nativeName}`}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <Icon name="globe" />
        <span>{long ? current.nativeName : current.code.toUpperCase()}</span>
      </button>
      {open && <div className="lang-scrim" onClick={() => setOpen(false)} />}
      <nav className="lang-list" hidden={!open} aria-label={a11y.language}>
        {supportedLanguages.map((l) => (
          <Link
            key={l.code}
            to={pathFor(l.code)}
            lang={l.code}
            aria-current={l.code === current.code ? 'true' : undefined}
            onClick={(e) => {
              e.preventDefault();
              i18n.changeLanguage(l.code);
              setOpen(false);
              navigate(pathFor(l.code));
            }}
          >
            {l.nativeName}
          </Link>
        ))}
      </nav>
    </div>
  );
};

const Navbar: React.FC = () => {
  const [menu, setMenu] = useState(false);
  const menuBtn = useRef<HTMLButtonElement>(null);
  const data = useData();
  const d = data.navbar;
  // Section anchors live on the home page; these work from every route.
  const home = useLanguagePrefix() || '/';
  const links: [string, string][] = [
    ['features', d.links.features],
    ['how-it-works', d.links.howItWorks],
    ['pricing', d.links.pricing],
    ['faq', d.links.faq],
  ];

  return (
    <header className="nav-wrap">
      <div className="wrap nav">
        <div
          className="nav-bar"
          onKeyDown={(e) => {
            if (e.key !== 'Escape' || !menu) return;
            setMenu(false);
            menuBtn.current?.focus();
          }}
        >
          <a className="brand" href={`${home}#top`}>
            <img src={ICON_SRC} alt="" width={38} height={38} />
            <span>{d.brandName}</span>
          </a>
          <nav className="nav-links" aria-label={data.a11y.primaryNav}>
            {links.map(([id, label]) => <a key={id} href={`${home}#${id}`}>{label}</a>)}
          </nav>
          <div className="nav-r">
            <LanguageMenu />
            <a className="btn btn-ink btn-sm" href={`${home}#download`}>{d.links.getApp}</a>
            <button
              ref={menuBtn}
              type="button"
              className="menu-btn"
              aria-label={data.a11y.menu}
              aria-expanded={menu}
              onClick={() => setMenu(!menu)}
            >
              <Icon name={menu ? 'close' : 'menu'} />
            </button>
          </div>
          {menu && (
            <nav className="menu" aria-label={data.a11y.mobileNav}>
              {links.map(([id, label]) => (
                <a key={id} href={`${home}#${id}`} onClick={() => setMenu(false)}>{label}</a>
              ))}
              <a className="btn btn-ink" href={`${home}#download`} onClick={() => setMenu(false)}>{d.links.downloadApp}</a>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
