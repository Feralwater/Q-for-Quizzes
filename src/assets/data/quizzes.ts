import vueLogo from '@/assets/images/logos/vueLogo.svg';
import piniaLogo from '@/assets/images/logos/piniaLogo.svg';
import hookLogo from '@/assets/images/logos/hookLogo.svg';
import { basicVueQuestions } from '@/assets/data/basicVueQuestions';
import { piniaQuestions } from '@/assets/data/piniaQuestions';
import type { QuizQuestion } from '@/types/QuizQuestion';
import { intermediateVueQuestions } from '@/assets/data/intermediateVueQuestions';
import { advancedVueQuestions } from '@/assets/data/advancedVueQuestions';
import { reactHooksQuestions } from '@/assets/data/reactHooksQuestions';

const calculateQuizTime = (questions: QuizQuestion[]) => questions.reduce((acc, curr) => acc + curr.timeToAnswer, 0);

export const quizzes = [
  {
    id: 'vue-basics',
    image: vueLogo,
    questionsAmount: basicVueQuestions.length,
    timeToComplete: calculateQuizTime(basicVueQuestions),
  },
  {
    id: 'vue-intermediate',
    image: vueLogo,
    questionsAmount: intermediateVueQuestions.length,
    timeToComplete: calculateQuizTime(intermediateVueQuestions),
  },
  {
    id: 'vue-advanced',
    image: vueLogo,
    questionsAmount: advancedVueQuestions.length,
    timeToComplete: calculateQuizTime(advancedVueQuestions),
  },
  {
    id: 'pinia',
    image: piniaLogo,
    questionsAmount: piniaQuestions.length,
    timeToComplete: calculateQuizTime(piniaQuestions),
  },
  {
    id: 'react-hooks',
    image: hookLogo,
    questionsAmount: reactHooksQuestions.length,
    timeToComplete: calculateQuizTime(reactHooksQuestions),
  },
];