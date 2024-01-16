import i18n from '@/i18n';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { nextTick } from 'vue';
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import type { Locale } from 'vue-i18n';

class Trans {
  get defaultLocale() {
    return import.meta.env.VITE_DEFAULT_LOCALE;
  }

  get supportedLocales() {
    return import.meta.env.VITE_SUPPORTED_LOCALES.split(',');
  }

  get currentLocale() {
    return i18n.global.locale.value;
  }

  set currentLocale(newLocale) {
    i18n.global.locale.value = newLocale;
  }

  async switchLanguage(newLocale: Locale) {
    await this.loadLocaleMessages(newLocale);
    const { setLocalStorage } = useLocalStorage('user-locale', newLocale);
    this.currentLocale = newLocale;
    document.querySelector('html')?.setAttribute('lang', newLocale);
    setLocalStorage(newLocale);
  }

  async loadLocaleMessages(locale: Locale) {
    if (!i18n.global.availableLocales.includes(locale)) {
      const messages = await import(`@/i18n/locales/${locale}.json`);
      i18n.global.setLocaleMessage(locale, messages.default);
    }

    return nextTick();
  }

  isLocaleSupported(locale: Locale) {
    return this.supportedLocales.includes(locale);
  }

  getUserLocale() {
    const locale = window.navigator.language
      || this.defaultLocale;

    return {
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
    if (userPersistedLocale) {
      return userPersistedLocale;
    }

    const userPreferredLocale = this.getUserLocale();

    if (this.isLocaleSupported(userPreferredLocale.locale)) {
      return userPreferredLocale.locale;
    }

    if (this.isLocaleSupported(userPreferredLocale.localeNoRegion)) {
      return userPreferredLocale.localeNoRegion;
    }

    return this.defaultLocale;
  }

  async routeMiddleware(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
    const paramLocale = to.params.locale as Locale;

    if (!this.isLocaleSupported(paramLocale)) {
      return next(this.guessDefaultLocale());
    }

    await this.switchLanguage(paramLocale);
    return next();
  }

  i18nRoute(to: {name: string; params?: {locale: Locale}}) {
    return {
      ...to,
      params: {
        ...to.params,
        locale: this.currentLocale,
      },
    };
  }
}

export const trans = new Trans();
