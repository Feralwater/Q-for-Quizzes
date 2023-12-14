<script setup lang="ts">
import vueIcon from '@/assets/images/logo.svg';
import QuizCard from '@/views/DashboardView/Components/QuizCard/QuizCard.vue';
import RulesButton from '@/components/RulesButton/RulesButton.vue';
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
  <v-dialog width="500">
    <template #activator="{ props }">
      <rules-button v-bind="props" />
    </template>

    <template #default="{ isActive }">
      <v-card title="Dialog">
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>

        <v-card-actions>
          <v-spacer />

          <v-btn
            text="Close Dialog"
            @click="isActive.value = false"
          />
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped>
@import 'DashboardView.scss';
</style>