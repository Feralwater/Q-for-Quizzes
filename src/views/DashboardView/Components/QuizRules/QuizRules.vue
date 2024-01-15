<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { useI18n } from 'vue-i18n';

const i18n = useI18n();
const rules = [
  {
    title: i18n.t('quizRules.limitRule.title'),
    description: i18n.t('quizRules.limitRule.description'),
  },
  {
    title: i18n.t('quizRules.backtrackingRule.title'),
    description: i18n.t('quizRules.backtrackingRule.description'),
  },
  {
    title: i18n.t('quizRules.automaticProgressionRule.title'),
    description: i18n.t('quizRules.automaticProgressionRule.description'),
  },
];

const { xs } = useDisplay();
</script>

<template>
  <ol class="rules">
    <li
      v-for="(rule, index) in rules"
      :key="index"
      :class="{
        rules__item: true,
        rules__item__mobile: xs,
      }"
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