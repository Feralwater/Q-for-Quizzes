<script setup lang="ts">
import { RouterView } from 'vue-router'
import CountDown from "@/components/CountDown/CountDown.vue";
</script>

<template>
  <CountDown :time="10" />

  <RouterView />
</template>

<style scoped>

</style>
