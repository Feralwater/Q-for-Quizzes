import i18n from '@/i18n';
import { useLocalStorage } from '@/hooks/useLocalStorage';

export class Trans {
  get defaultLocale() {
    return import.meta.env.VITE_DEFAULT_LOCALE;
  }

  get supportedLocales() {
    return import.meta.env.VITE_SUPPORTED_LOCALES.split(',');
  }

  set currentLocale(newLocale) {
    i18n.global.locale.value = newLocale;
  }

  async switchLanguage(newLocale) {
    const { setLocalStorage } = useLocalStorage('user-locale', newLocale);
    this.currentLocale = newLocale;
    document.querySelector('html').setAttribute('lang', newLocale);
    setLocalStorage(newLocale);
  }

  isLocaleSupported(locale) {
    return this.supportedLocales.includes(locale);
  }

  getUserLocale() {
    const locale = window.navigator.language
      || window.navigator.userLanguage
      || this.defaultLocale;

    return{
      locale,
      localeNoRegion: locale.split('-')[0],
    };
  }

  getPersistedLocale() {
    const { getLocalStorage } = useLocalStorage('user-locale', this.defaultLocale);
    const persistedLocale = getLocalStorage();

    if (this.isLocaleSupported(persistedLocale)) {
      return persistedLocale;
    } else {
      return this.defaultLocale;
    }
  }

  guessDefaultLocale() {
    const userPersistedLocale = this.getPersistedLocale();
    if(userPersistedLocale){
      return userPersistedLocale;
    }

    const userPreferredLocale = this.getUserLocale();

    if(this.isLocaleSupported(userPreferredLocale.locale)){
      return userPreferredLocale.locale;
    }

    if(this.isLocaleSupported(userPreferredLocale.localeNoRegion)){
      return userPreferredLocale.localeNoRegion;
    }

    return this.defaultLocale;
  }
}

