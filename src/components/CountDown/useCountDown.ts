import { ref, onMounted, onUnmounted } from 'vue';

export const useCountDown = (initialTime: number) => {
  const countdown = ref(initialTime);
  let intervalId: number | null = null;

  const startCountDown = (time: number) => {
    stopCountDown();
    countdown.value = time;


    intervalId = setInterval(() => {
      countdown.value--;
      if (countdown.value === -1) {
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

  const watchTime = (newTime: number) => {
    startCountDown(newTime);
  };

  onMounted(() => {
    startCountDown(initialTime);
  });

  onUnmounted(stopCountDown);

  return {
    countdown,
    watchTime,
  };
};
