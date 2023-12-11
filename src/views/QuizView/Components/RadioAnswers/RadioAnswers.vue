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
  <form>
    <div
      v-for="option in options"
      :key="option"
      class="radiobtn"
    >
      <input
        :id="option"
        type="radio"
        :name="option"
        :value="option"
        :checked="option === selectedAnswer"
        @change="handleAnswerChange(option)"
      >
      <label :for="option">{{ option }}</label>
    </div>
  </form>
</template>

<style scoped>
@import './RadioAnswers.scss';
</style>