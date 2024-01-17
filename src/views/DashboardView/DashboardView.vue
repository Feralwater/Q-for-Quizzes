<script setup lang="ts">
import QuizCard from '@/views/DashboardView/Components/QuizCard/QuizCard.vue';
import RulesButton from '@/views/DashboardView/Components/RulesButton/RulesButton.vue';
import DialogWindow from '@/components/DialogWindow/DialogWindow.vue';
import QuizRules from '@/views/DashboardView/Components/QuizRules/QuizRules.vue';
import { quizzes } from '@/assets/data/quizzes';
import { useDisplay } from 'vuetify';
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher.vue';
import { trans } from '@/i18n/translation';
import { useI18n } from 'vue-i18n';
import { Routers } from '@/router/Routers'

const { mdAndDown } = useDisplay();
const i18n = useI18n();
</script>

<template>
  <div class="dashboard__container">
    <header
      :class="{
        header: true,
        header__mobile: mdAndDown,
      }"
    >
      <v-btn
        color="primary"
        variant="outlined"
        :class="{
          header__profile: true,
          header__profile__mobile: mdAndDown,
        }"
        icon
        aria-label="Open profile"
        :title="i18n.t('profile.title')"
        @click="$router.push(Routers.Profile)"
      >
        <v-icon
          color="lightTextColour"
          icon="mdi-account-circle"
          :size="mdAndDown ? '24' : '50'"
        />
      </v-btn>
      <b>Q</b>
      <span>for</span>
      <span><b>Q</b>uizzes</span>
      <div class="header__locales">
        <LanguageSwitcher />
      </div>
    </header>

    <div
      :class="{
        dashboard: true,
        dashboard__mobile: mdAndDown
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
              :quiz-title="i18n.t(`quizzes.${quiz.id}.title`)"
              :quiz-description="i18n.t(`quizzes.${quiz.id}.description`)"
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
    :dialog-title="i18n.t('quizRules.title')"
    :activator="RulesButton"
    :dialog-content="QuizRules"
  />
</template>

<style scoped>
@import 'DashboardView.scss';
</style>