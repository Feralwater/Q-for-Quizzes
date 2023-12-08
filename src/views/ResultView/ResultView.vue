<script setup lang="ts">
import { useQuizScore } from '@/stores/score'
import { type NavigationGuardNext, onBeforeRouteLeave, type RouteLocationNormalized } from 'vue-router'

const { score, isQuizCompleted } = useQuizScore();
const beforeRouteLeave = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  if (isQuizCompleted) {
    next(false);
  }
};

onBeforeRouteLeave(beforeRouteLeave);

</script>

<template>
  {{ score }}
</template>

<style scoped>

</style>