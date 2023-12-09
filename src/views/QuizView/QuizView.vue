<script setup lang="ts">
import thinkingMan from '@/assets/images/thinkingMan.png';
import CountDown from '@/components/CountDown/CountDown.vue';

import { basicQuestions } from '@/assets/data/basicQuestions';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { useQuizScore } from '@/stores/score';
import router from '@/router';
import { Routers } from '@/router/Routers';

const currentQuestionIndex = ref(0);
const currentQuestion = computed(() => basicQuestions[currentQuestionIndex.value]);
const progress = computed(() => ((currentQuestionIndex.value + 1) / basicQuestions.length) * 100);
const currentQuestionNumber = computed(() => currentQuestionIndex.value + 1);

const onNextQuestion = () => {
  calculateScore();
  currentQuestionIndex.value++;
};

const handleCountdownFinished = (time: number) => {
  if (!shouldShowNextButton.value && time === -1) {
    onSubmitTest();
  }
  if (time === -1) {
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
    Question {{ currentQuestionNumber }} of {{ basicQuestions.length }}
    <div class="quiz__countdown">
      <CountDown
        :key="currentQuestionIndex"
        :time="currentQuestion.timeToAnswer"
        @time-up="handleCountdownFinished"
      />
    </div>
    <v-progress-linear
      color="primary"
      :model-value="progress"
    />
    <section class="quiz__inner">
      <div class="quiz__question">
        {{ currentQuestion.question }}
      </div>
      <div class="quiz__answersContainer">
        <fieldset class="quiz__answers">
          <div
            v-for="(option, optionIndex) in currentQuestion.options"
            :key="optionIndex"
            class="quiz__answer"
          >
            <v-text-field
              :id="`optionIndex-${optionIndex} - question-${currentQuestionIndex}`"
              v-model="answerSelected"
              :value="option"
              variant="plain"
              type="radio"
              :name="`question-${currentQuestionIndex}`"
            />
            <label :for="`optionIndex-${optionIndex} - question-${currentQuestionIndex}`">
              {{ option }}
            </label>
          </div>
        </fieldset>
        <div class="quiz__image">
          <v-img
            :src="thinkingMan"
            width="300px"
            height="300px"
          />
        </div>
      </div>
    </section>
    <v-btn
      v-if="shouldShowNextButton"
      color="primary"
      @click="onNextQuestion"
    >
      Next
    </v-btn>
    <v-btn
      v-if="!shouldShowNextButton"
      color="primary"
      @click="onSubmitTest"
    >
      Submit Test
    </v-btn>
  </div>
</template>

<style scoped>
@import "./QuizView.scss";
</style>