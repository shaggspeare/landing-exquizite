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
    <nav className="fixed w-full z-50 bg-paper/90 backdrop-blur-md border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to={prefix || '/'} className="flex-shrink-0 flex items-center gap-2.5 cursor-pointer">
            <div className="w-8 h-8 rounded-lg overflow-hidden">
              <img src="/images/calleo-icon.png" alt="Calleo Logo" width={128} height={128} loading="eager" className="w-full h-full object-cover" />
            </div>
            <span className="font-display text-lg tracking-tight text-ink">{d.brandName}</span>
          </Link>

          <div className="flex items-center gap-4">
            {!isContentPage && (
              <div className="hidden md:flex items-center gap-8">
                <a href="#features" className="text-ink/60 hover:text-ink font-medium transition-colors text-sm">{d.links.features}</a>
                <a href="#how-it-works" className="text-ink/60 hover:text-ink font-medium transition-colors text-sm">{d.links.howItWorks}</a>
                <a href="#testimonials" className="text-ink/60 hover:text-ink font-medium transition-colors text-sm">{d.links.stories}</a>
                <a href="#pricing" className="text-ink/60 hover:text-ink font-medium transition-colors text-sm">{d.links.pricing}</a>
                <a
                  href="#download"
                  className="bg-ink hover:bg-ink/85 text-white px-5 py-2 rounded-full font-semibold transition-colors text-sm"
                >
                  {d.links.getApp}
                </a>
              </div>
            )}

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-ink/15 hover:border-ink/30 transition-colors text-sm"
              >
                <Globe size={16} className="text-ink/50" />
                <span className="hidden sm:inline text-ink/70">{currentLang.nativeName}</span>
                <span className="sm:hidden">{currentLang.flag}</span>
              </button>

              {langOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                  <div className="absolute right-0 top-full mt-2 w-56 bg-paper rounded-2xl shadow-lg border border-ink/10 py-2 z-50 max-h-80 overflow-y-auto">
                    {supportedLanguages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => switchLanguage(lang.code)}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-cream flex items-center gap-3 ${
                          i18n.language === lang.code ? 'text-accent font-semibold' : 'text-ink/70'
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
                  className="text-ink/70 hover:text-ink focus:outline-none p-2"
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
        <div className="md:hidden absolute top-16 left-0 w-full bg-paper border-b border-ink/10 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a
              href="#features"
              className="block px-3 py-3 text-base font-medium text-ink/70 hover:text-ink hover:bg-cream rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              {d.links.features}
            </a>
            <a
              href="#how-it-works"
              className="block px-3 py-3 text-base font-medium text-ink/70 hover:text-ink hover:bg-cream rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              {d.links.howItWorks}
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-3 text-base font-medium text-ink/70 hover:text-ink hover:bg-cream rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              {d.links.stories}
            </a>
            <a
              href="#pricing"
              className="block px-3 py-3 text-base font-medium text-ink/70 hover:text-ink hover:bg-cream rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              {d.links.pricing}
            </a>
            <a
              href="#download"
              className="block px-3 py-3 mt-4 text-center text-base font-bold text-white bg-accent hover:bg-accent-hover rounded-full"
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
