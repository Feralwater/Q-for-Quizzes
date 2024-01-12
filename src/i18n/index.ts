import { createI18n } from 'vue-i18n';
import { plPluralizationRules } from '@/i18n/rules/pluralization';
import { datetimeFormats  } from '@/i18n/rules/datetime';

const messages = {
  'en-US': {
    quizzes: {
      vueBasics: {
        title: 'Vue Basics',
        description: 'Test your knowledge of Vue.js fundamentals',
      },
    },
    questions: '{n} Questions | {n} Question | {n} Questions',
    startQuiz: 'Start Quiz',
  },
  'pl-PL': {
    quizzes: {
      vueBasics: {
        title: 'Podstawy Vue',
        description: 'Sprawdź swoją wiedzę na temat podstaw Vue.js',
      },
    },
    questions: '{n} pytanie | {n} pytania | {n} pytań',
    startQuiz: 'Rozpocznij Quiz',
  },
};

export default createI18n({
  locale: 'pl-PL',
  fallbackLocale: 'en-US',
  legacy: false,
  globalInjection: true,
  messages,
  pluralRules: {
    'pl-PL': plPluralizationRules,
  },
  datetimeFormats,
});
