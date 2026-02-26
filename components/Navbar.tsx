import React, { useState } from 'react';
import { useData } from '../hooks/useData';
import { useLanguagePrefix } from '../hooks/useLanguagePrefix';
import { useTranslation } from 'react-i18next';
import { supportedLanguages } from '../i18n';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const data = useData();
  const d = data.navbar;
  const prefix = useLanguagePrefix();
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const isContentPage = location.pathname.includes('/privacy-policy') || location.pathname.includes('/support');
  const currentLang = supportedLanguages.find((l) => l.code === i18n.language) || supportedLanguages[0];

  const switchLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setLangOpen(false);

    const pathParts = location.pathname.split('/').filter(Boolean);
    const langCodes = supportedLanguages.map((l) => l.code);
    if (pathParts.length > 0 && langCodes.includes(pathParts[0])) {
      pathParts.shift();
    }
    const newPrefix = code === 'en' ? '' : `/${code}`;
    const remainingPath = pathParts.length > 0 ? `/${pathParts.join('/')}` : '';
    navigate(`${newPrefix}${remainingPath}` || '/');
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to={prefix || '/'} className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <img src="/images/logo.png" alt="Exquizite Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">{d.brandName}</span>
          </Link>

          <div className="flex items-center gap-4">
            {!isContentPage && (
              <div className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">{d.links.features}</a>
                <a href="#how-it-works" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">{d.links.howItWorks}</a>
                <a href="#testimonials" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">{d.links.stories}</a>
                <a href="#pricing" className="text-slate-600 hover:text-primary-600 font-medium transition-colors">{d.links.pricing}</a>
                <a
                  href="#download"
                  className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-full font-medium transition-colors text-sm"
                >
                  {d.links.getApp}
                </a>
              </div>
            )}

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors text-sm"
              >
                <Globe size={16} className="text-slate-500" />
                <span className="hidden sm:inline text-slate-700">{currentLang.nativeName}</span>
                <span className="sm:hidden">{currentLang.flag}</span>
              </button>

              {langOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                  <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-lg border border-slate-200 py-2 z-50 max-h-80 overflow-y-auto">
                    {supportedLanguages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => switchLanguage(lang.code)}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-slate-50 flex items-center gap-3 ${
                          i18n.language === lang.code ? 'bg-primary-50 text-primary-700 font-medium' : 'text-slate-700'
                        }`}
                      >
                        <span className="text-base">{lang.flag}</span>
                        <span>{lang.nativeName}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {!isContentPage && (
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a
              href="#features"
              className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {d.links.features}
            </a>
            <a
              href="#how-it-works"
              className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {d.links.howItWorks}
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {d.links.stories}
            </a>
            <a
              href="#pricing"
              className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-primary-600 hover:bg-slate-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {d.links.pricing}
            </a>
            <a
              href="#download"
              className="block px-3 py-3 mt-4 text-center text-base font-bold text-white bg-primary-600 hover:bg-primary-700 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              {d.links.downloadApp}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
