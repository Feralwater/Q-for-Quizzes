import { ref, onMounted, onUnmounted } from 'vue';
import beep from '@/assets/sounds/beep.mp3';

export const useCountDown = (initialTime: number) => {
  const countdown = ref(initialTime + 0.5);
  let intervalId: null | ReturnType<typeof setInterval> = null;
  const beepAudio = new Audio(beep);
  const startCountDown = (time: number) => {
    stopCountDown();
    countdown.value = time;


    intervalId = setInterval(() => {
      countdown.value--;
      if (countdown.value === 0) {
        stopCountDown();
      }
      if (countdown.value === 4) {
        beepAudio.play();
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
