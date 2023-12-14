<script setup lang="ts">
import vueIcon from '@/assets/images/logo.svg';
import QuizCard from '@/views/DashboardView/Components/QuizCard/QuizCard.vue';
import RulesButton from '@/components/RulesButton/RulesButton.vue';
import DialogWindow from '@/components/DialogWindow/DialogWindow.vue';
import QuizeRules from '@/views/DashboardView/Components/QuizeRules/QuizeRules.vue';
</script>

<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <quiz-card
          :quiz-icon="vueIcon"
          quiz-title="Vue.js basics"
          quiz-description="Test your knowledge of Vue.js fundamentals"
          :quiz-time="190"
          :quiz-questions-amount="10"
        />
      </v-col>
    </v-row>
  </v-container>
  <dialog-window
    dialog-title="Quiz Rules"
    :activator="RulesButton"
    :dialog-content="QuizeRules"
  />
</template>

<style scoped>
@import 'DashboardView.scss';
</style>