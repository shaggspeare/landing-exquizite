import React from 'react';
import { useData } from '../hooks/useData';
import { useLanguagePrefix } from '../hooks/useLanguagePrefix';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const data = useData();
  const d = data.footer;
  const prefix = useLanguagePrefix();

  return (
    <footer className="bg-paper border-t border-ink/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              <span className="font-display text-base tracking-[-0.01em] text-ink">{d.brandName}</span>
            </div>
            <p className="text-sm text-ink/50 mb-6">
              {d.brandDescription}
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-extrabold tracking-[0.15em] uppercase text-ink/40 mb-4">{d.columns.product.title}</h3>
            <ul className="space-y-2.5 text-sm text-ink/60">
              {d.columns.product.links.map((link: any, i: number) => (
                <li key={i}><a href={link.href} className="hover:text-accent transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-extrabold tracking-[0.15em] uppercase text-ink/40 mb-4">{d.columns.support.title}</h3>
            <ul className="space-y-2.5 text-sm text-ink/60">
              {d.columns.support.links.map((link: any, i: number) => (
                <li key={i}>
                  {link.to ? (
                    <Link to={`${prefix}${link.to}`} className="hover:text-accent transition-colors">{link.label}</Link>
                  ) : (
                    <a href={link.href} className="hover:text-accent transition-colors">{link.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-extrabold tracking-[0.15em] uppercase text-ink/40 mb-4">{d.columns.legal.title}</h3>
            <ul className="space-y-2.5 text-sm text-ink/60">
              {d.columns.legal.links.map((link: any, i: number) => (
                <li key={i}><a href={link.href} className="hover:text-accent transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-ink/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-ink/40">{d.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
