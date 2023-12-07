<script setup lang="ts">
import thinkingMan from "@/assets/images/thinkingMan.png"
import CountDown from "@/components/CountDown/CountDown.vue";

// interface Question {
//   id: number;
//   question: string;
//   answer: string;
//   options: string[];
//   timeToAnswer: number;
// }

// const props = defineProps({
//   questions: {
//     type: Array<Question>,
//     required: true,
//     default: () => [],
//   },
// });

import { basicQuestions } from "@/assets/Data/basicQuestions";
import { computed, ref } from "vue";

// const questions = ref<Question[]>(basicQuestions);
const currentQuestionIndex = ref(0);
const currentQuestion = computed(() => basicQuestions[currentQuestionIndex.value]);
const progress = computed(() => ((currentQuestionIndex.value + 1) / basicQuestions.length) * 100);
const currentQuestionNumber = computed(() => currentQuestionIndex.value + 1);

const onNextQuestion = () => currentQuestionIndex.value++;

</script>

<template>
  <div class="quiz">
    Question {{ currentQuestionNumber }} of {{ basicQuestions.length }}
    <div class="quiz__countdown">
      <CountDown :time="currentQuestion.timeToAnswer" />
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
            <input
              id="optionIndex"
              type="radio"
              :name="'question-' + currentQuestionIndex"
            >
            <label for="optionIndex">{{ option }}</label>
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
      color="primary"
      @click="onNextQuestion"
    >
      Next
    </v-btn>
  </div>
</template>

<style scoped>
@import "./QuizView.scss";
</style>