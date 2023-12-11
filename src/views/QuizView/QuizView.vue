<script setup lang="ts">
import CountDown from '@/components/CountDown/CountDown.vue';

import { basicQuestions } from '@/assets/data/basicQuestions';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { useQuizScore } from '@/stores/score';
import router from '@/router';
import { Routers } from '@/router/Routers';
import SideBar from '@/components/SideBar/SideBar.vue';

const TIME_UP_VALUE = -1;

const currentQuestionIndex = ref(0);
const currentQuestion = computed(() => basicQuestions[currentQuestionIndex.value]);
const calculateProgress = (current: number, total: number) => ((current + 1) / total) * 100;
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

onMounted(() => {
  document.addEventListener('visibilitychange', handleVisibilityChange);
});

onBeforeUnmount(() => {
  document.removeEventListener('visibilitychange', handleVisibilityChange);
});

const handleVisibilityChange = () => {
  if (document.visibilityState === 'visible') {
    onNextQuestion();
  }
};

const onSubmitTest = () => {
  setQuizCompleted();
  calculateScore();
  router.push(Routers.Result);
};

const { incrementScore, setQuizCompleted } = useQuizScore();

const shouldShowNextButton = computed(() => basicQuestions.length - 1 !== currentQuestionIndex.value);

const answerSelected = ref('');

const calculateScore = () => {
  if (currentQuestion.value.answer === answerSelected.value) {
    incrementScore(currentQuestion.value.score);
  }
  answerSelected.value = '';
};

</script>

<template>
  <div class="quiz">
    <side-bar :progress="progress" />
    <div class="quiz__content">
      <div class="quiz__countdown">
        <CountDown
          :key="currentQuestionIndex"
          :time="currentQuestion.timeToAnswer"
          @time-up="handleCountdownFinished"
        />
      </div>
      <div>
        <div class="quiz__question-number">
          Question {{ currentQuestionNumber }}/{{ basicQuestions.length }}
        </div>
        <div class="quiz__question">
          {{ currentQuestion.question }}
        </div>
        <v-divider
          color="grey"
          class="quiz__answers"
        />
        <v-radio-group
          v-for="(option, optionIndex) in currentQuestion.options"
          :key="optionIndex"
          v-model="answerSelected"
        >
          <v-radio
            :value="option"
            :label="option"
            class="quiz__answer"
            color="primary"
          />
        </v-radio-group>
      </div>
      <v-divider color="grey" />
      <v-btn
        color="primary"
        class="quiz__btn"
        height="50px"
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