<script setup lang="ts">

import QuizCard from '@/views/DashboardView/Components/QuizCard/QuizCard.vue';
</script>

<template>
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