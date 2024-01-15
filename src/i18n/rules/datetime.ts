import type { I18nOptions } from 'vue-i18n';

export const datetimeFormats: I18nOptions["datetimeFormats"]   = {
  'en-US': {
    short: {
      year: 'numeric', month: 'short', day: 'numeric',
    },
    long: {
      year: 'numeric', month: 'short', day: 'numeric',
      weekday: 'short', hour: 'numeric', minute: 'numeric',
    },
  },
  'pl-Pl': {
    short: {
      year: 'numeric', month: 'short', day: 'numeric',
    },
    long: {
      year: 'numeric', month: 'short', day: 'numeric',
      weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: true,
    },
  },
};