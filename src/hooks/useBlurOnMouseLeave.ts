import { onMounted, onUnmounted } from 'vue';

export const useBlurOnMouseLeave = () => {
  const handleMouseLeave = (event: MouseEvent) => {
    if (!event.relatedTarget) {
      document.body.classList.add('blur');
    }
  };

  const handleMouseEnter = (event: MouseEvent) => {
    if (!event.relatedTarget) {
      document.body.classList.remove('blur');
    }
  };

  onMounted(() => {
    document.addEventListener('mouseout', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseEnter);
  });

  onUnmounted(() => {
    document.removeEventListener('mouseout', handleMouseLeave);
    document.removeEventListener('mouseover', handleMouseEnter);
  });
};
  
