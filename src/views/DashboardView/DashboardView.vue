<script setup lang="ts">
import vueIcon from '@/assets/images/logos/vueLogo.svg';
import QuizCard from '@/views/DashboardView/Components/QuizCard/QuizCard.vue';
import RulesButton from '@/views/DashboardView/Components/RulesButton/RulesButton.vue';
import DialogWindow from '@/components/DialogWindow/DialogWindow.vue';
import QuizRules from '@/views/DashboardView/Components/QuizRules/QuizRules.vue';
</script>

<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        md="3"
      >
        <quiz-card
          :quiz-icon="vueIcon"
          quiz-title="Vue.js basics"
          quiz-description="Test your knowledge of Vue.js fundamentals"
          :quiz-time="190"
          :quiz-questions-amount="10"
          quiz-id="vue-basics"
        />
      </v-col>
      <v-col
        cols="12"
        md="3"
      >
        <quiz-card
          :quiz-icon="vueIcon"
          quiz-title="Vue.js basics"
          quiz-description="Test your knowledge of Vue.js fundamentals"
          :quiz-time="190"
          :quiz-questions-amount="10"
          quiz-id="pinia"
        />
      </v-col>
    </v-row>
  </v-container>
  <dialog-window
    dialog-title="Quiz Rules"
    :activator="RulesButton"
    :dialog-content="QuizRules"
  />
</template>

<style scoped>
@import 'DashboardView.scss';
</style>