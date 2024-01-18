import type { QuizKeys } from '@/types/quizKeys';
import type { QuizQuestion } from '@/types/QuizQuestion';
import { useI18n } from 'vue-i18n';

export const loadQuestions = async (quizKey: QuizKeys): Promise<QuizQuestion[]> => {
  const i18n = useI18n();
  const locale = i18n.locale.value;

  switch (quizKey) {
    case 'vue-basics':
      return import(`../../../assets/questions/${locale}/basicVueQuestions`).then(m => m.basicVueQuestions);
    case 'pinia':
      return import(`../../../assets/questions/${locale}/piniaQuestions`).then(m => m.piniaQuestions);
    case 'vue-intermediate':
      return import(`../../../assets/questions/${locale}/intermediateVueQuestions`).then(m => m.intermediateVueQuestions);
    case 'vue-advanced':
      return import(`../../../assets/questions/${locale}/advancedVueQuestions`).then(m => m.advancedVueQuestions);
    case 'react-hooks':
      return import(`../../../assets/questions/${locale}/reactHooksQuestions`).then(m => m.reactHooksQuestions);
    default:
      throw new Error(`Unknown quiz key: ${quizKey}`);
  }
};