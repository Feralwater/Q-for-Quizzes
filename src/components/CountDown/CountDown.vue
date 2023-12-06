<script setup lang="ts">

defineProps({
  time: {
    type: Number,
    default: 0,
  }
})
</script>

<template>
  <div class="countdown">
    <span class="countdown__time">
      {{ time }}
    </span>
    <span>
      sec
    </span>
  </div>
</template>

<style scoped>
@import './CountDown.scss';
</style>