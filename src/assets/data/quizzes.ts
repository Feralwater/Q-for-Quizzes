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
    name: 'Vue basics',
    description: 'Test your knowledge of Vue.js fundamentals',
    image: vueLogo,
    questionsAmount: basicVueQuestions.length,
    timeToComplete: calculateQuizTime(basicVueQuestions),
  },
  {
    id: 'vue-intermediate',
    name: 'Vue intermediate',
    description: 'Test your knowledge of Vue.js intermediate',
    image: vueLogo,
    questionsAmount: intermediateVueQuestions.length,
    timeToComplete: calculateQuizTime(intermediateVueQuestions),
  },
  {
    id: 'vue-advanced',
    name: 'Vue advanced',
    description: 'Test your knowledge of Vue.js advanced',
    image: vueLogo,
    questionsAmount: advancedVueQuestions.length,
    timeToComplete: calculateQuizTime(advancedVueQuestions),
  },
  {
    id: 'pinia',
    name: 'Pinia',
    description: 'Test your knowledge of Pinia',
    image: piniaLogo,
    questionsAmount: piniaQuestions.length,
    timeToComplete: calculateQuizTime(piniaQuestions),
  },
  {
    id: 'react-hooks',
    name: 'React hooks',
    description: 'Test your knowledge of React hooks',
    image: hookLogo,
    questionsAmount: reactHooksQuestions.length,
    timeToComplete: calculateQuizTime(reactHooksQuestions),
  },
];