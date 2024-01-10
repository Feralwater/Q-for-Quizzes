import { ref, watch } from 'vue';
import { defineStore } from 'pinia';

export const useQuizScore = defineStore('score', () => {
  const score = ref<number>(0);
  const correctAnswers = ref<number>(0);
  const totalQuestions = ref<number>(0);
  const isQuizCompleted = ref<boolean>(false);

  const incrementScore = (itemWeight: number  ) => {
     score.value += itemWeight;
  };

  const resetQuiz = () => {
    score.value = 0;
    correctAnswers.value = 0;
    isQuizCompleted.value = false;
    totalQuestions.value = 0;
  };

 const setQuizCompleted = () => {
    isQuizCompleted.value = true;
 };
 
 watch(score, (value, oldValue) => {
    if (value > oldValue) {
      correctAnswers.value++;
    }
 });

  return {
    score,
    incrementScore,
    resetQuiz,
    isQuizCompleted,
    setQuizCompleted,
    correctAnswers,
    totalQuestions,
  };
});
