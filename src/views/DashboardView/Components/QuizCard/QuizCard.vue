<script setup lang="ts">
import router from '@/router';
import icon from '@/assets/logo.svg';

const startQuiz = () => {
  router.push({
    name: 'quiz',
  });
};
</script>

<template>
  <v-card
    style="overflow: initial; z-index: initial"
    class="mx-auto my-12 card"
    max-width="374"
  >
    <v-img
      :src="icon"
      class="card__img"
    />

    <v-card-item>
      <v-card-title class="card__text">
        Vuejs basic
      </v-card-title>

      <v-card-subtitle class="card__text">
        <span class="me-1">
          Test your vuejs knowledge
        </span>

        <v-icon
          color="primary"
          icon="mdi-school"
          size="small"
        />
      </v-card-subtitle>
    </v-card-item>

    <v-divider class="mx-4 mb-1" />

    <v-card-title class="card__text">
      You will have:
    </v-card-title>

    <div class="px-4">
      <v-chip-group>
        <v-chip class="card__chip">
          <v-icon
            color="primary"
            icon="mdi-clock-outline"
            size="small"
          />
          <span class="card__chip__text card__text">
            20 minutes
          </span>
        </v-chip>

        <v-chip class="card__chip">
          <v-icon
            color="primary"
            icon="mdi-help-circle-outline"
            size="small"
          />
          <span class="card__chip__text card__text">
            10 questions
          </span>
        </v-chip>
      </v-chip-group>
    </div>

    <v-card-actions>
      <v-btn
        color="primary"
        variant="outlined"
        @click="startQuiz"
      >
        Start Quiz
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
@import 'QuizCard.scss';
</style>

