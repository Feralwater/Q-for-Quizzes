import { onMounted, onUnmounted, ref } from "vue";

export const useCountDown = (time: number) => {
  const countdown = ref(time);

  let intervalId: number | null = null;

  const startCountDown = () => {
    intervalId = setInterval(() => {
      countdown.value--;
      if (countdown.value === 0) {
        stopCountDown();
      }
    }, 1000);
  }

  const stopCountDown = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  onMounted(startCountDown);
  onUnmounted(stopCountDown);

  return {
    countdown,
  }
}