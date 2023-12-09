import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useQuizScore = defineStore('score', () => {
  const score = ref<number>(0);
  const isQuizCompleted = ref<boolean>(false);

  const incrementScore = (itemWeight: number  ) => {
     score.value += itemWeight;
  };

  const resetScore = () => {
    score.value = 0;
  };

 const setQuizCompleted = () => {
    isQuizCompleted.value = true;
 };

  return {
    score,
    incrementScore,
    resetScore,
    isQuizCompleted,
    setQuizCompleted,
  };
});
