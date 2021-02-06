import i18n, { TFunction } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { setLocale } from 'yup';
import { MixedLocale, StringLocale } from 'yup/lib/locale';
import tr from '../i18n/tr.json';

export class I18nConfig {
  public async init() {
    const t = await i18n.use(initReactI18next).init({
      resources: {
        tr,
      },
      lng: 'tr',
      interpolation: {
        escapeValue: false,
      },
    });

    setLocale(this.getValidationMessages(t));
  }

  private getValidationMessages(t: TFunction) {
    return {
      mixed: {
        required: t('validation.mixed.required'),
      } as MixedLocale,
      string: {
        email: t('validation.string.email'),
        min: t('validation.string.min'),
        max: t('validation.string.max'),
      } as StringLocale,
    };
  }
}
