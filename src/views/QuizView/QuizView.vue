<script setup lang="ts">
import thinkingMan from "@/assets/images/thinkingMan.png"
import CountDown from "@/components/CountDown/CountDown.vue";
</script>

<template>
  <div class="quiz">
    <div class="quiz__countdown">
      <CountDown />
    </div>
    <section class="quiz__inner">
      <div class="quiz__question">
        question
      </div>
      <div class="quiz__answersContainer">
        <fieldset class="quiz__answers">
          <div class="quiz__answer">
            <input
              id="answer1"
              type="radio"
              name="answer"
            >
            <label for="answer1">answer1</label>
          </div>
          <div class="quiz__answer">
            <input
              id="answer2"
              type="radio"
              name="answer"
            >
            <label for="answer2">answer2</label>
          </div>
          <div class="quiz__answer">
            <input
              id="answer3"
              type="radio"
              name="answer"
            >
            <label for="answer3">answer3</label>
          </div>
          <div class="quiz__answer">
            <input
              id="answer4"
              type="radio"
              name="answer"
            >
            <label for="answer4">answer4</label>
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
  </div>
</template>

<style scoped>
@import "./QuizView.scss";
</style>