<script setup lang="ts">
import { useQuizScore } from '@/stores/score';
import { type NavigationGuardNext, onBeforeRouteLeave, type RouteLocationNormalized } from 'vue-router';
import { Routers } from '@/router/Routers';
import { useDisplay } from 'vuetify';
import confetti from '@/assets/images/confetti.svg';

const { score, isQuizCompleted } = useQuizScore();
const beforeRouteLeave = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  if (isQuizCompleted) {
    next(false);
  }
};

onBeforeRouteLeave(beforeRouteLeave);
const { xs } = useDisplay();
</script>

<template>
  <div class="result">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
          offset-md="3"
        >
          <v-card class="result__card">
            <v-img
              cover
              width="100%"
              height="200px"
              :src="confetti"
              alt="Result"
            />
            <v-card-title class="text-center">
              <h1
                :class="{
                  result__title: true,
                  result__title__mobile: xs
                }"
              >
                Your total score is
              </h1>
              <h1 class="result__title_primary">
                {{ score }}
              </h1>
            </v-card-title>
            <v-card-subtitle class="text-center">
              <h2
                :class="{
                  result__description: true,
                  result__description__mobile: xs
                }"
              >
                {{}} correct answers out of {{}} questions
              </h2>
            </v-card-subtitle>
            <v-card-text class="text-center">
              You can download your certificate in your profile
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn
                color="primary"
                @click="$router.push(Routers.Dashboard)"
              >
                Try again
              </v-btn>
              <v-btn
                color="primary"
                disabled
              >
                My profile
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>


<style scoped>
@import 'ResultView.scss';

</style>