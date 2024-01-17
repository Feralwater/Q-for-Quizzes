import i18n from '@/i18n';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { nextTick } from 'vue';
import type { Locale } from 'vue-i18n';

class Trans {
  get supportedLocales() {
    return import.meta.env.VITE_SUPPORTED_LOCALES.split(',');
  }
  set currentLocale(newLocale: Locale) {
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
}

export const trans = new Trans();
