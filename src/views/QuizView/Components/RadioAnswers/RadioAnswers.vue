<script setup lang="ts">
import { type PropType } from 'vue';

defineProps({
  options: {
    type: Array as PropType<string[]>,
    required: true,
    default: () => [],
  },
  selectedAnswer: {
    type: String,
    required: true,
    default: '',
  },
});

const emit = defineEmits(['update:selectedAnswer']);

const handleAnswerChange = (option: string) => {
  emit('update:selectedAnswer', option);
};
</script>

<template>
  <form
    class="answers"
    role="radiogroup"
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
        type="radio"
        name="answerOption"
        :value="option"
        :checked="option === selectedAnswer"
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
  </form>
</template>

<style scoped>
@import './RadioAnswers.scss';
</style>