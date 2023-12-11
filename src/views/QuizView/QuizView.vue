<script setup lang="ts">
import CountDown from '@/components/CountDown/CountDown.vue';

import { basicQuestions } from '@/assets/data/basicQuestions';
import { computed, ref } from 'vue';
import { useQuizScore } from '@/stores/score';
import router from '@/router';
import { Routers } from '@/router/Routers';
import SideBar from '@/components/SideBar/SideBar.vue';
import { useVisibilityChange } from '@/views/QuizView/hooks/useVisibilityChange';
import QuizQuestion from '@/views/QuizView/Components/Question/QuizQuestion.vue';

const TIME_UP_VALUE = -1;

const currentQuestionIndex = ref(0);
const currentQuestion = computed(() => basicQuestions[currentQuestionIndex.value]);
const calculateProgress = (current: number, total: number) => (current / total) * 100;
const progress = computed(() => calculateProgress(currentQuestionIndex.value, basicQuestions.length));
const currentQuestionNumber = computed(() => currentQuestionIndex.value + 1);

const onNextQuestion = () => {
  calculateScore();
  currentQuestionIndex.value++;
};

const handleCountdownFinished = (time: number) => {
  if (!shouldShowNextButton.value && time === TIME_UP_VALUE) {
    onSubmitTest();
  }
  if (time === TIME_UP_VALUE) {
    onNextQuestion();
  }
};

useVisibilityChange(onNextQuestion);

const onSubmitTest = () => {
  setQuizCompleted();
  calculateScore();
  router.push(Routers.Result);
};

const { incrementScore, setQuizCompleted } = useQuizScore();

const shouldShowNextButton = computed(() => basicQuestions.length - 1 !== currentQuestionIndex.value);

const answerSelected = ref('');
const answersSelected = ref<string[]>([]);

const calculateScore = () => {
  if (currentQuestion.value.answer.length > 1) {
    if (currentQuestion.value.answer.every((answer) => answersSelected.value.includes(answer))) {
      incrementScore(currentQuestion.value.points);
    }
    return;
  }
  if (currentQuestion.value.answer[0] === answerSelected.value) {
    incrementScore(currentQuestion.value.points);
  }
};

const updateSelectedAnswer = (option: string) => {
  answerSelected.value = option;
};

const updateSelectedAnswers = (option: string) => {
  if (answersSelected.value.includes(option)) {
    answersSelected.value = answersSelected.value.filter((answer) => answer !== option);
    return;
  }
  answersSelected.value = [...answersSelected.value, option];
};
</script>

<template>
  <div
    role="region"
    aria-label="Quiz Section"
    class="quiz"
  >
    <side-bar
      :progress="progress"
      aria-label="Progress Sidebar"
    />
    <div class="quiz__content">
      <div
        class="quiz__countdown"
        role="timer"
        aria-live="assertive"
      >
        <CountDown
          :key="currentQuestionIndex"
          :time="currentQuestion.timeToAnswer"
          aria-label="Countdown Timer"
          @time-up="handleCountdownFinished"
        />
      </div>

      <quiz-question 
        :current-question-number="currentQuestionNumber"
        :current-question="currentQuestion"
        :total-questions="basicQuestions.length"
        :answer-selected="answerSelected"
        :answers-selected="answersSelected"
        :update-selected-answer="updateSelectedAnswer"
        :update-selected-answers="updateSelectedAnswers"
      />

      <v-btn
        color="primary"
        class="quiz__btn"
        height="50px"
        role="button"
        aria-label="{{ shouldShowNextButton ? 'Next Question' : 'Submit Test' }}"
        @click="shouldShowNextButton ? onNextQuestion() : onSubmitTest()"
      >
        <span class="quiz__btn-text">
          {{ shouldShowNextButton ? 'Next Question' : 'Submit Test' }}
        </span>
      </v-btn>
    </div>
  </div>
</template>

<style scoped>
@import "./QuizView.scss";
</style>