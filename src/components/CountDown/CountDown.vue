<script setup lang="ts">

import { useCountDown } from "@/components/CountDown/useCountDown";

const props = defineProps({
  time: {
    type: Number,
    default: 60,
  }
})

const { countdown } = useCountDown(props.time);

</script>

<template>
  <div class="countdown">
    <span class="countdown__time">
      {{ countdown }}
    </span>
    <span>
      sec
    </span>
  </div>
</template>

<style scoped>
@import './CountDown.scss';
</style>