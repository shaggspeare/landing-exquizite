import React, { useEffect } from 'react';
import { Routes, Route, useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { languageCodes } from './i18n';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import Support from './components/Support';
import LegalPage from './components/LegalPage';
import ScrollToTop from './components/ScrollToTop';

function LanguageWrapper({ children }: { children: React.ReactNode }) {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && languageCodes.includes(lang) && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  if (lang && !languageCodes.includes(lang)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <div className="min-h-screen bg-slate-50">
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* English (default) routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/support" element={<Support />} />
        <Route path="/terms" element={<LegalPage page="terms" />} />
        <Route path="/cookies" element={<LegalPage page="cookies" />} />

        {/* Localized routes */}
        <Route path="/:lang" element={<LanguageWrapper><LandingPage /></LanguageWrapper>} />
        <Route path="/:lang/privacy-policy" element={<LanguageWrapper><PrivacyPolicy /></LanguageWrapper>} />
        <Route path="/:lang/support" element={<LanguageWrapper><Support /></LanguageWrapper>} />
        <Route path="/:lang/terms" element={<LanguageWrapper><LegalPage page="terms" /></LanguageWrapper>} />
        <Route path="/:lang/cookies" element={<LanguageWrapper><LegalPage page="cookies" /></LanguageWrapper>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
