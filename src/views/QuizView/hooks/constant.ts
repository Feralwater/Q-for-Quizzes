import type { QuizKeys } from '@/types/quizKeys';
import type { QuizQuestion } from '@/types/QuizQuestion';

export const loadQuestions = async (quizKey: QuizKeys): Promise<QuizQuestion[]> => {
  switch (quizKey) {
    case 'vue-basics':
      return import('@/assets/questions/basicVueQuestions').then(m => m.basicVueQuestions);
    case 'pinia':
      return import('@/assets/questions/piniaQuestions').then(m => m.piniaQuestions);
    case 'vue-intermediate':
      return import('@/assets/questions/intermediateVueQuestions').then(m => m.intermediateVueQuestions);
    case 'vue-advanced':
      return import('@/assets/questions/advancedVueQuestions').then(m => m.advancedVueQuestions);
    case 'react-hooks':
      return import('@/assets/questions/reactHooksQuestions').then(m => m.reactHooksQuestions);
    default:
      throw new Error(`Unknown quiz key: ${quizKey}`);
  }
};