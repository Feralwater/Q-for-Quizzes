import type { QuizKeys } from '@/types/quizKeys';
import type { QuizQuestion } from '@/types/QuizQuestion';
import { basicVueQuestions } from '@/assets/data/basicVueQuestions';
import { piniaQuestions } from '@/assets/data/piniaQuestions';
import { intermediateVueQuestions } from '@/assets/data/intermediateVueQuestions';
import { advancedVueQuestions } from '@/assets/data/advancedVueQuestions';

export const questions: Record<QuizKeys, QuizQuestion[]> = {
  'vue-basics': basicVueQuestions,
  'pinia': piniaQuestions,
  'vue-intermediate': intermediateVueQuestions,
  'vue-advanced': advancedVueQuestions,
};
