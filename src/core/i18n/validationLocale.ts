import { TFunction } from 'i18next';
import { setLocale } from 'yup';
import { MixedLocale, StringLocale } from 'yup/lib/locale';

export const applyValidationLocale = (t: TFunction) => {
  const validationMessages = {
    mixed: {
      required: t('validation.mixed.required'),
    } as MixedLocale,
    string: {
      email: t('validation.string.email'),
      min: t('validation.string.min'),
      max: t('validation.string.max'),
    } as StringLocale,
  };

  setLocale(validationMessages);
};
