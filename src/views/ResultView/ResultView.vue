<script setup lang="ts">
import { useQuizScore } from '@/stores/score'

const { score }=useQuizScore();

</script>

<template>
  {{ score }}
</template>

<style scoped>

</style>