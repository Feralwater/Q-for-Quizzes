import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSound = defineStore('sound', () => {

    const isSoundEnabled = ref<boolean>(true);
    const toggleSound = () => {
      isSoundEnabled.value = !isSoundEnabled.value;
    };
    return {
      isSoundEnabled,
      toggleSound,
    };
  },
);