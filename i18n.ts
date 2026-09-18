import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en/translation.json';
import de from './locales/de/translation.json';
import es from './locales/es/translation.json';
import fr from './locales/fr/translation.json';
import it from './locales/it/translation.json';
import pl from './locales/pl/translation.json';
import uk from './locales/uk/translation.json';
import ru from './locales/ru/translation.json';
import zh from './locales/zh/translation.json';
import ko from './locales/ko/translation.json';
import ar from './locales/ar/translation.json';
import pt from './locales/pt/translation.json';
import tr from './locales/tr/translation.json';
import id from './locales/id/translation.json';

export const supportedLanguages = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧', ogLocale: 'en_US' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', ogLocale: 'de_DE' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', ogLocale: 'es_ES' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', ogLocale: 'fr_FR' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', ogLocale: 'it_IT' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski', flag: '🇵🇱', ogLocale: 'pl_PL' },
  { code: 'uk', name: 'Ukrainian', nativeName: 'Українська', flag: '🇺🇦', ogLocale: 'uk_UA' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '', ogLocale: 'ru_RU' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳', ogLocale: 'zh_CN' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷', ogLocale: 'ko_KR' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', ogLocale: 'ar_AR' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹', ogLocale: 'pt_PT' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷', ogLocale: 'tr_TR' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', flag: '🇮🇩', ogLocale: 'id_ID' },
];

export const languageCodes = supportedLanguages.map((l) => l.code);

/** Facebook-style locale per language, for og:locale / og:locale:alternate. */
export const ogLocale = (code: string) =>
  supportedLanguages.find((l) => l.code === code)?.ogLocale ?? 'en_US';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      de: { translation: de },
      es: { translation: es },
      fr: { translation: fr },
      it: { translation: it },
      pl: { translation: pl },
      uk: { translation: uk },
      ru: { translation: ru },
      zh: { translation: zh },
      ko: { translation: ko },
      ar: { translation: ar },
      pt: { translation: pt },
      tr: { translation: tr },
      id: { translation: id },
    },
    fallbackLng: 'en',
    supportedLngs: languageCodes,
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',
    initImmediate: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      lookupFromPathIndex: 0,
      convertDetectedLanguage: (lng: string) => lng.split('-')[0],
    },
  });

export default i18n;
