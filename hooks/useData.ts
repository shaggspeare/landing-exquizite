import { useTranslation } from 'react-i18next';

export function useData() {
  const { i18n } = useTranslation();
  const bundle = i18n.getResourceBundle(i18n.language, 'translation')
    ?? i18n.getResourceBundle('en', 'translation');
  return (bundle ?? {}) as Record<string, any>;
}
