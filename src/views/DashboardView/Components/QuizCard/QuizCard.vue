<script setup lang="ts">
import router from '@/router';
import icon from '@/assets/images/logo.svg';
import { computed } from 'vue';

const props = defineProps({
  quizIcon: {
    type: String,
    required: true,
    default: icon,
  },
  quizTitle: {
    type: String,
    required: true,
    default: '',
  },
  quizDescription: {
    type: String,
    required: true,
    default: '',
  },
  quizTime: {
    type: Number,
    required: true,
    default: 0,
  },
  quizQuestionsAmount: {
    type: Number,
    required: true,
    default: 0,
  },
});

const timeInHours = computed(() => {
  const hours = Math.floor(props.quizTime / 3600);
  const minutes = Math.floor((props.quizTime % 3600) / 60);

  return `${hours}h ${minutes}m`;
});

const startQuiz = () => {
  router.push({
    name: 'quiz',
  });
};
</script>

<template>
  <v-card
    role="region"
    aria-label="Quiz Card"
    aria-labelledby="quiz-title"
    style="overflow: initial; z-index: initial"
    class="mx-auto my-12 card"
    max-width="374"
  >
    <v-img
      :src="quizIcon"
      class="card__img"
      alt="Quiz Icon"
    />

    <v-card-item>
      <v-card-title
        id="quiz-title"
        class="card__text"
      >
        {{ quizTitle }}
      </v-card-title>

      <v-card-subtitle class="card__text">
        <span class="me-1">
          {{ quizDescription }}
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
            {{ timeInHours }}
          </span>
        </v-chip>

        <v-chip class="card__chip">
          <v-icon
            color="primary"
            icon="mdi-help-circle-outline"
            size="small"
          />
          <span class="card__chip__text card__text">
            {{ quizQuestionsAmount }} Questions
          </span>
        </v-chip>
      </v-chip-group>
    </div>

    <v-card-actions>
      <v-btn
        role="button"
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

