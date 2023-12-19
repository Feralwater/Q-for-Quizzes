import vueLogo from '@/assets/images/logos/vueLogo.svg';
import piniaLogo from '@/assets/images/logos/piniaLogo.svg';
import { basicVueQuestions } from '@/assets/data/basicVueQuestions';
import { piniaQuestions } from '@/assets/data/piniaQuestions';
import type { QuizQuestion } from '@/types/QuizQuestion';

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
    id: 'pinia',
    name: 'Pinia',
    description: 'Test your knowledge of Pinia',
    image: piniaLogo,
    questionsAmount: piniaQuestions.length,
    timeToComplete: calculateQuizTime(piniaQuestions),
  },
];