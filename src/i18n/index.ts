import { createI18n } from 'vue-i18n';
import { plPluralizationRules } from '@/i18n/rules/pluralization';
import { datetimeFormats  } from '@/i18n/rules/datetime';
import en from '@/i18n/locales/en.json';
import pl from '@/i18n/locales/pl.json';

export default createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  globalInjection: true,
  messages: { en, pl },
  pluralRules: {
    'pl-PL': plPluralizationRules,
  },
  datetimeFormats,
});