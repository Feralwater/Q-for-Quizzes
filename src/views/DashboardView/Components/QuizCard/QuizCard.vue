<script setup lang="ts">
import router from '@/router';
import icon from '@/assets/images/logos/vueLogo.svg';
import { computed } from 'vue';
import { useDisplay } from 'vuetify';
import { useI18n } from 'vue-i18n';

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
  quizId: {
    type: String,
    required: true,
    default: '',
  },
});

const timeInHours = computed(() => {
  const hours = Math.floor(props.quizTime / 3600);
  const minutes = Math.floor((props.quizTime % 3600) / 60);

  return `${hours}${i18n.t('hours')} ${minutes}${i18n.t('minutes')}`;
});

const startQuiz = () => {
  router.push({
    name: 'quiz',
    params: {
      quizId: props.quizId,
    },
  });
};
const i18n = useI18n();
const { xs } = useDisplay();
</script>

<template>
  <v-card
    role="region"
    aria-label="Quiz Card"
    style="overflow: initial; z-index: initial"
    class="card"
    :width="xs ? '300' : '400'"
  >
    <div class="card__img">
      <v-img
        :src="quizIcon"
        alt="Quiz Icon"
      />
    </div>
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

    <div class="pa-2">
      <v-row>
        <v-col cols="6">
          <v-card-subtitle class="card__text">
            <v-icon
              color="primary"
              icon="mdi-clock-outline"
              size="small"
            />
            <span class="ms-1">
              {{ timeInHours }}
            </span>
          </v-card-subtitle>
        </v-col>

        <v-col cols="6">
          <v-card-subtitle class="card__text">
            <v-icon
              color="primary"
              icon="mdi-file-question-outline"
              size="small"
            />
            <span class="ms-1">
              {{ i18n.t('questions', quizQuestionsAmount) }}
            </span>
          </v-card-subtitle>
        </v-col>
      </v-row>
    </div>

    <v-card-actions class="ma-2">
      <v-btn
        block
        role="button"
        color="primary"
        variant="flat"
        @click="startQuiz"
      >
        <span class="card__text_light">
          {{ $t('startQuiz') }}
        </span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
@import 'QuizCard.scss';
</style>

