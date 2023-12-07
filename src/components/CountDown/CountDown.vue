<script setup lang="ts">
import { useCountDown } from "@/components/CountDown/useCountDown";
import { computed, onMounted, onUnmounted, watch } from "vue";

const props = defineProps({
  time: {
    type: Number,
    default: 60,
  }
});

const { countdown, stopCountDown, startCountDown } = useCountDown();

watch(() => props.time, (newTime) => {
  startCountDown(newTime);
});

onMounted(() => {
  startCountDown(props.time);
});

onUnmounted(() => {
  stopCountDown();
});

const calculateDashOffset = computed(() => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  return circumference - (countdown.value / props.time) * circumference;
});

</script>

<template>
  <div class="countdown">
    <svg
      class="countdown__svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g class="countdown__circle">
        <circle
          class="countdown__path-elapsed"
          cx="50"
          cy="50"
          r="45"
        />
        <path
          stroke-dasharray="283"
          :class="`countdown__path-remaining ${countdown < 5 ? 'countdown__path-remaining--red' : ''}`"
          :style="`stroke-dashoffset: ${calculateDashOffset}px`"
          d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
        />
      </g>
    </svg>
    <span :class="`countdown__label ${countdown < 5 ? 'countdown__label--red' : ''}`">
      {{ countdown }}
    </span>
  </div>
</template>

<style scoped>
@import './CountDown.scss';
</style>