<script setup lang="ts">
import { useCountDown } from "@/components/CountDown/useCountDown";
import { computed, watch } from "vue";
import { useDisplay } from 'vuetify';

const props = defineProps({
  time: {
    type: Number,
    default: 60,
  },
});

const emit = defineEmits(["timeUp"]);

const { countdown, watchTime, isSoundEnabled, toggleSound } = useCountDown(props.time);

watch(() => props.time, watchTime);
watch(countdown, (countdown) => {
    emit("timeUp", countdown);
});

const radius = 45;
const circumference = 2 * Math.PI * radius;

const calculateDashOffset = computed(() => {
  return circumference - (countdown.value / props.time) * circumference;
});

const { smAndDown, xs } = useDisplay();
</script>

<template>
  <v-icon
    color="grey"
    :size="xs ? '12' : '24'"
    @click="toggleSound"
  >
    {{ isSoundEnabled ? 'mdi-volume-high' : 'mdi-volume-off' }}
  </v-icon>
  <div
    :class="{
      countdown: true,
      countdown__tablet: smAndDown,
      countdown__mobile: xs,
    }"
  >
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
          :stroke-dasharray="circumference"
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
    <span
      :class="{
        countdown__label: true,
        countdown__label__tablet: smAndDown,
        countdown__label__mobile: xs,
        countdown__label_red: countdown < 5,
      }"
    >
      {{ countdown }}
    </span>
  </div>
</template>

<style scoped>
@import './CountDown.scss';
</style>