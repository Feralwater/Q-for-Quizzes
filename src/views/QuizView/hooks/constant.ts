import type { QuizKeys } from '@/types/quizKeys';
import type { QuizQuestion } from '@/types/QuizQuestion';

export const loadQuestions = async (quizKey: QuizKeys): Promise<QuizQuestion[]> => {
  switch (quizKey) {
    case 'vue-basics':
      return import('@/assets/data/basicVueQuestions').then(m => m.basicVueQuestions);
    case 'pinia':
      return import('@/assets/data/piniaQuestions').then(m => m.piniaQuestions);
    case 'vue-intermediate':
      return import('@/assets/data/intermediateVueQuestions').then(m => m.intermediateVueQuestions);
    case 'vue-advanced':
      return import('@/assets/data/advancedVueQuestions').then(m => m.advancedVueQuestions);
    case 'react-hooks':
      return import('@/assets/data/reactHooksQuestions').then(m => m.reactHooksQuestions);
    default:
      throw new Error(`Unknown quiz key: ${quizKey}`);
  }
};