<script setup lang="ts">
import { type PropType } from 'vue';

defineProps({
  options: {
    type: Array as PropType<string[]>,
    required: true,
    default: () => [],
  },
  selectedAnswers: {
    type: Array as PropType<string[]>,
    required: true,
    default: () => [],
  },
});

const emit = defineEmits(['update:selectedAnswers']);

const handleAnswerChange = (option: string) => {
  emit('update:selectedAnswers', option);
};
</script>

<template>
  <div
    class="answers"
    aria-labelledby="answersLabel"
  >
    <div
      v-for="option in options"
      :key="option"
      class="answers__option"
    >
      <input
        :id="option"
        class="answers__option-input"
        type="checkbox"
        name="answerOption"
        :value="option"
        :checked="selectedAnswers.includes(option)"
        required
        role="radio"
        aria-labelledby="answersLabel"
        @change="handleAnswerChange(option)"
      >
      <label
        :for="option"
        class="answers__option-label"
      >
        {{ option }}
      </label>
    </div>
  </div>
</template>

<style scoped>
@import '@/views/QuizView/Components/SingleAnswer/SingleAnswer.scss';
</style>