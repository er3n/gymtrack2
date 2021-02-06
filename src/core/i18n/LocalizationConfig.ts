import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation from './tr/translation.json';
import { applyValidationLocale } from './validationLocale';

export const resources = {
  tr: {
    translation,
  },
} as const;

i18n
  .use(initReactI18next)
  .init({
    resources: resources,
    lng: 'tr',
    interpolation: {
      escapeValue: false,
    },
  })
  .then((t) => applyValidationLocale(t));

export default i18n;
