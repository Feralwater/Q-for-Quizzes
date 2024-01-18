import vueLogo from '@/assets/images/logos/vueLogo.svg';
import piniaLogo from '@/assets/images/logos/piniaLogo.svg';
import hookLogo from '@/assets/images/logos/hookLogo.svg';

export const quizzes = [
  {
    id: 'vue-basics',
    image: vueLogo,
    questionsAmount: 50,
    timeToComplete: 2745,
  },
  {
    id: 'vue-intermediate',
    image: vueLogo,
    questionsAmount: 11,
    timeToComplete: 1230,
  },
  {
    id: 'vue-advanced',
    image: vueLogo,
    questionsAmount: 20,
    timeToComplete: 1520,
  },
  {
    id: 'pinia',
    image: piniaLogo,
    questionsAmount: 15,
    timeToComplete: 595,
  },
  {
    id: 'react-hooks',
    image: hookLogo,
    questionsAmount: 26,
    timeToComplete: 1925,
  },
];