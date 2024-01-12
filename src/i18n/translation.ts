import i18n from '@/i18n';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export const Trans = {
  get supportedLocales() {
    return import.meta.env.VITE_SUPPORTED_LOCALES.split(',');
  },

  set currentLocale(newLocale) {
    i18n.global.locale.value = newLocale;
  },

  async switchLanguage(newLocale) {
    const { setLocalStorage }=useLocalStorage('user-locale', newLocale);
    Trans.currentLocale = newLocale;
    document.querySelector('html').setAttribute('lang', newLocale);
    setLocalStorage(newLocale);
  },
};
