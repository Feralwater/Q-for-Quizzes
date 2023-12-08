<script setup lang="ts">
import { useQuizScore } from '@/stores/score'
import { type NavigationGuardNext, onBeforeRouteLeave, type RouteLocationNormalized } from 'vue-router'

const { score }=useQuizScore();

const beforeRouteLeave = (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  if (score !== null) {
    next(false);
  } else {
    next();
  }
};

onBeforeRouteLeave(beforeRouteLeave);

</script>

<template>
  {{ score }}
</template>

<style scoped>

</style>