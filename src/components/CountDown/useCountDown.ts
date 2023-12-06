import {onMounted, ref, watch} from "vue";

export const useCountDown = (time: number) => {
  const countdown = ref(time);

  let intervalId: number | null = null;

  const startCountDown = () => {
    intervalId = setInterval(() => {
      countdown.value--;
    }, 1000);
  }

  const stopCountDown = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
  }

  onMounted(() => {
    startCountDown();

    watch(countdown, (newVal) => {
      if (newVal === 0) {
        stopCountDown();
      }
    });

    return () => {
      stopCountDown();
    }
  });

  return {
    countdown,
  }
}