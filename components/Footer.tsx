import React from 'react';
import { useData } from '../hooks/useData';
import { useLanguagePrefix } from '../hooks/useLanguagePrefix';
import { Link } from 'react-router-dom';
import { Twitter, Instagram, Github } from 'lucide-react';

const Footer: React.FC = () => {
  const data = useData();
  const d = data.footer;
  const prefix = useLanguagePrefix();

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg overflow-hidden">
                <img src="/images/logo.png" alt="Exquizite Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-lg text-slate-900">{d.brandName}</span>
            </div>
            <p className="text-sm text-slate-500 mb-6">
              {d.brandDescription}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-slate-600"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-slate-600"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-slate-600"><Github size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">{d.columns.product.title}</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {d.columns.product.links.map((link: any, i: number) => (
                <li key={i}><a href={link.href} className="hover:text-primary-600">{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">{d.columns.support.title}</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {d.columns.support.links.map((link: any, i: number) => (
                <li key={i}>
                  {link.to ? (
                    <Link to={`${prefix}${link.to}`} className="hover:text-primary-600">{link.label}</Link>
                  ) : (
                    <a href={link.href} className="hover:text-primary-600">{link.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-4">{d.columns.legal.title}</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {d.columns.legal.links.map((link: any, i: number) => (
                <li key={i}><a href={link.href} className="hover:text-primary-600">{link.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">{d.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
