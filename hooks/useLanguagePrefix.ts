import { useTranslation } from 'react-i18next';

export function useLanguagePrefix() {
  const { i18n } = useTranslation();
  return i18n.language === 'en' ? '' : `/${i18n.language}`;
}
