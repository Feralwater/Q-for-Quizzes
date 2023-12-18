<script setup lang="ts">
import QuizCard from '@/views/DashboardView/Components/QuizCard/QuizCard.vue';
import RulesButton from '@/views/DashboardView/Components/RulesButton/RulesButton.vue';
import DialogWindow from '@/components/DialogWindow/DialogWindow.vue';
import QuizRules from '@/views/DashboardView/Components/QuizRules/QuizRules.vue';
import { quizzes } from '@/assets/data/quizzes';
import { useDisplay } from 'vuetify';

const { mdAndDown } = useDisplay();
</script>

<template>
  <div class="dashboard__container">
    <header
      :class="{
        header: true,
        header__mobile: mdAndDown,
      }"
    >
      <b>Q</b>
      <span>for</span>
      <span><b>Q</b>uizzes</span>
    </header>

    <div
      :class="{
        dashboard: true,
        dashboard__mobile: mdAndDown,
      }"
    >
      <v-container>
        <v-row justify="center">
          <v-col
            v-for="quiz in quizzes"
            :key="quiz.id"
            class="d-flex justify-center ma-6"
          >
            <quiz-card
              :quiz-icon="quiz.image"
              :quiz-title="quiz.name"
              :quiz-description="quiz.description"
              :quiz-time="quiz.timeToComplete"
              :quiz-questions-amount="quiz.questionsAmount"
              :quiz-id="quiz.id"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
  <dialog-window
    dialog-title="Quiz Rules"
    :activator="RulesButton"
    :dialog-content="QuizRules"
  />
</template>

<style scoped>
@import 'DashboardView.scss';
</style>