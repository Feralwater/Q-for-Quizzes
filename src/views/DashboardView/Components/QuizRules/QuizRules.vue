<script setup lang="ts">
const rules = [
  {
    title: 'Time Limit',
    description: 'Each question has a designated time limit within which you must provide an answer. You can submit your answer before the time runs out to move on to the next question.',
  },
  {
    title: 'No Backtracking',
    description: 'Once you submit an answer, you cannot go back to change it. Be sure of your choice before moving forward.',
  },
  {
    title: 'Automatic Progression',
    description: 'If the time runs out or you leave the quiz page, you\'ll be automatically moved to the next question. Any selected choices will be saved, so make every second count!',
  },
];
</script>

<template>
  <ol class="rules">
    <li
      v-for="(rule, index) in rules"
      :key="index"
    >
      <div class="rules__title">
        {{ rule.title }}
      </div>
      {{ rule.description }}
    </li>
  </ol>
</template>

<style scoped>
@import "QuizRules.scss";
</style>