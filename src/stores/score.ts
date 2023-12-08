import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useQuizScore = defineStore('score', () => {
  const score = ref(0)

  const incrementScore = (itemWeight: number  ) => {
     score.value += itemWeight
  }

  const resetScore = () => {
    score.value = 0
  }

  return {
    score,
    incrementScore,
    resetScore
  }
})
