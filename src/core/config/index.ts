import { I18nConfig } from './I18nConfig';

export const initConfig = async () => {
  await new I18nConfig().init();
};
