<script setup lang="ts">
import CountDown from '@/components/CountDown/CountDown.vue';
import SideBar from '@/components/SideBar/SideBar.vue';
import QuizQuestion from '@/views/QuizView/Components/QuizQuestion/QuizQuestion.vue';
import { useQuizQuestion } from '@/views/QuizView/hooks/useQuizQuestion';
import { useDisplay } from 'vuetify';
import { useBlurOnMouseLeave } from '@/hooks/useBlurOnMouseLeave';
import { type NavigationGuardNext, onBeforeRouteLeave, type RouteLocationNormalized } from 'vue-router';

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
  questionsAmount,
  selectedQuiz,
} = useQuizQuestion();

useBlurOnMouseLeave();

const leaveQuizConfirmation = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  if (to.name === 'result') {
    next();
    return;
  }

  const confirm = window.confirm('Are you sure you want to leave the quiz?');
  if (confirm) {
    next();
  } else {
    next(false);
  }
};

onBeforeRouteLeave(leaveQuizConfirmation);

const { mdAndDown } = useDisplay();

</script>

<template>
  <div
    v-if="currentQuestion"
    role="region"
    aria-label="Quiz Section"
    :class="{
      quiz: !mdAndDown,
      quiz__mobile: mdAndDown,
    }"
  >
    <side-bar
      :progress="progress"
      :header-icon="selectedQuiz?.image"
      :header-name="$t(`quizzes.${selectedQuiz?.id}.title`)"
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
          @time-up="handleCountdownFinished"
        />
      </div>

      <quiz-question
        :current-question-number="currentQuestionNumber"
        :current-question="currentQuestion"
        :total-questions="questionsAmount"
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
        :height="mdAndDown ? '40px' : '50px'"
        role="button"
        :aria-label="shouldShowNextButton ? 'Next QuizQuestion' : 'Submit Test'"
        @click="onNextQuestion"
      >
        <span
          :aria-label="shouldShowNextButton ? 'Next QuizQuestion' : 'Submit Test'"
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
  <div v-else>Loading</div>
</template>

<style scoped>
@import "./QuizView.scss";
</style>