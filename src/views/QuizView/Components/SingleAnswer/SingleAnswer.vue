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
  <div
    class="answers"
    role="radiogroup"
    aria-labelledby="answersLabel"
  >
    <div
      v-for="(option, index) in options"
      :key="index"
      class="answers__option"
    >
      <input
        :id="`answerOption_${index}`"
        class="answers__option-input"
        type="radio"
        name="answerOption"
        :value="option"
        :checked="option === selectedAnswer"
        required
        role="radio"
        :aria-checked="option === selectedAnswer ? 'true' : 'false'"
        aria-labelledby="answersLabel"
        @change="handleAnswerChange(option)"
      >
      <label
        :for="`answerOption_${index}`"
        class="answers__option-label"
      >
        {{ option }}
      </label>
    </div>
  </div>
</template>


<style scoped>
@import 'SingleAnswer.scss';
</style>