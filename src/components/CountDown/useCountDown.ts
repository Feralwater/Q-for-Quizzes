import { ref } from 'vue';

export const useCountDown = () => {
  const countdown = ref(0);
  let intervalId: number | null = null;

  const startCountDown = (time: number) => {
    countdown.value = time;
    stopCountDown();
    intervalId = setInterval(() => {
      countdown.value--;
      if (countdown.value === 0) {
        stopCountDown();
      }
    }, 1000);
  };

  const stopCountDown = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
  };

  return {
    countdown,
    startCountDown,
    stopCountDown,
  };
};
