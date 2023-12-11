import { onBeforeUnmount, onMounted } from 'vue';

export const useVisibilityChange = (onVisibilityChange: () => void) => {
  const handleVisibilityChange = () => {
    if (document.visibilityState === 'visible') {
      onVisibilityChange();
    }
  };

  onMounted(() => {
    document.addEventListener('visibilitychange', handleVisibilityChange);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('visibilitychange', handleVisibilityChange);
  });
};