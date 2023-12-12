<script setup lang="ts">
import CountDown from '@/components/CountDown/CountDown.vue';
import { basicQuestions } from '@/assets/data/basicQuestions';
import SideBar from '@/components/SideBar/SideBar.vue';
import QuizQuestion from '@/views/QuizView/Components/QuizQuestion/QuizQuestion.vue';
import { useQuizQuestion } from '@/views/QuizView/hooks/useQuizQuestion';
import { useDisplay } from 'vuetify';

const {
  onNextQuestion,
  currentQuestionIndex,
  currentQuestion,
  currentQuestionNumber,
  shouldShowNextButton,
  answerSelected,
  answersSelected,
  updateSelectedAnswer,
  updateSelectedAnswers,
  progress,
  handleCountdownFinished,
} = useQuizQuestion();

const { mdAndDown } = useDisplay();

</script>

<template>
  <div
    role="region"
    aria-label="Quiz Section"
    :class="{
      quiz: !mdAndDown,
      quiz__mobile: mdAndDown,
    }"
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
        :class="{
          quiz__btn: true,
          quiz__btn_mobile: mdAndDown,
        }"
        :height="mdAndDown ? '30px' : '50px'"
        role="button"
        aria-label="{{ shouldShowNextButton ? 'Next QuizQuestion' : 'Submit Test' }}"
        @click="onNextQuestion"
      >
        <span
          :class="{
            quiz__btn__text: true,
            quiz__btn__text_mobile: mdAndDown,
          }"
        >
          {{ shouldShowNextButton ? 'Next Quiz Question' : 'Submit Test' }}
        </span>
      </v-btn>
    </div>
  </div>
</template>

<style scoped>
@import "./QuizView.scss";
</style>