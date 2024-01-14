import { createI18n } from 'vue-i18n';
import { plPluralizationRules } from '@/i18n/rules/pluralization';
import { datetimeFormats  } from '@/i18n/rules/datetime';
import en from '@/i18n/locales/en-US.json';

export default createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  globalInjection: true,
  messages: { en },
  pluralRules: {
    'pl-PL': plPluralizationRules,
  },
  datetimeFormats,
});
