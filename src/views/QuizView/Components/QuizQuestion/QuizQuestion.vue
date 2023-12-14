<script setup lang="ts">
import RadioAnswers from '@/views/QuizView/Components/SingleAnswer/SingleAnswer.vue';
import MultipleAnswers from '@/views/QuizView/Components/MultipleAnswers/MultipleAnswers.vue';
import { type PropType } from 'vue';
import { useDisplay } from 'vuetify';

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string[];
  points: number;
  timeToAnswer: number;
}

defineProps({
  currentQuestionNumber: {
    type: Number,
    required: true,
    default: 0,
  },
  currentQuestion: {
    type: Object as PropType<Question>,
    required: true,
    default: () => ({}),
  },
  totalQuestions: {
    type: Number,
    required: true,
    default: 0,
  },
  answerSelected: {
    type: String,
    required: true,
    default: '',
  },
  answersSelected: {
    type: Array as PropType<string[]>,
    required: true,
    default: () => [],
  },
  updateSelectedAnswer: {
    type: Function as PropType<(option: string) => void>,
    required: true,
    default: () => {},
  },
  updateSelectedAnswers: {
    type: Function as PropType<(option: string) => void>,
    required: true,
    default: () => {},
  },
});

const { smAndDown, xs } = useDisplay();

</script>

<template>
  <div>
    <div
      :class="{
        question__number: true,
        question__number_tablet: smAndDown,
        question__number_mobile: xs,
      }"
      role="status"
      aria-live="polite"
    >
      Question {{ currentQuestionNumber }}/{{ totalQuestions }}
    </div>
    <div
      :class="{
        question: true,
        question_tablet: smAndDown,
        question_mobile: xs,
      }"
      role="heading"
      aria-level="2"
      aria-live="polite"
      v-html="currentQuestion.question"
    />

    <v-divider
      role="separator"
      color="grey"
    />

    <radio-answers
      v-if="currentQuestion.answer.length === 1"
      :options="currentQuestion.options"
      :selected-answer="answerSelected"
      aria-label="Quiz answers options"
      @update:selected-answer="updateSelectedAnswer($event)"
    />
    <multiple-answers
      v-else
      :options="currentQuestion.options"
      :selected-answers="answersSelected"
      aria-label="Quiz answers options"
      @update:selected-answers="updateSelectedAnswers($event)"
    />
  </div>

  <v-divider
    role="separator"
    color="grey"
  />
</template>

<style scoped>
@import "QuizQuestion.scss";
</style>