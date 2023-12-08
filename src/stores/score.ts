import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useQuizScore = defineStore('score', () => {
  const score = ref<number | null>(null)

  const incrementScore = (itemWeight: number  ) => {
    if (!score.value) {
      score.value = 0
    }
     score.value += itemWeight
  }

  const resetScore = () => {
    score.value = null
  }

  return {
    score,
    incrementScore,
    resetScore
  }
})
