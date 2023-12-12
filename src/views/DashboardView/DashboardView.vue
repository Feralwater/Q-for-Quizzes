<script setup lang="ts">

import QuizCard from '@/views/DashboardView/Components/QuizCard/QuizCard.vue';
</script>

<template>
  <div class="my-4 text-subtitle-1">
    Quiz rules
    <v-icon
      color="error"
      icon="mdi-book-open-page-variant"
      size="small"
    />
  </div>

  <div>
    <v-icon
      color="error"
      icon="mdi-check-circle"
      size="small"
    />
    <span>
      Time Limit:
    </span>
    <span>
      Each question has a designated time limit within which you must provide an answer. You can submit your answer before the time runs out to move on to the next question.
    </span>
  </div>
  <div>
    <v-icon
      color="error"
      icon="mdi-check-circle"
      size="small"
    />
    <span>
      No Backtracking:
    </span>
    <span>
      Once you submit an answer, you cannot go back to change it. Be sure of your choice before moving forward.
    </span>
  </div>
  <div>
    <v-icon
      color="error"
      icon="mdi-check-circle"
      size="small"
    />
    <span>
      Automatic Progression:
    </span>
    <span>
      If the time runs out or you leave the quiz page, you'll be automatically moved to the next question. Any selected choices will be saved, so make every second count!
    </span>
  </div>

  <v-container>
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <quiz-card />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
@import 'DashboardView.scss';
</style>