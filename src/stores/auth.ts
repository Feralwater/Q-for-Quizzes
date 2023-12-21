import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import type { User } from '@/types/user';

export const useAuthStore = defineStore('auth', () => {
  const { getLocalStorage } = useLocalStorage<User>('user', { firstName: '', secondName: '' });
  const user = ref(getLocalStorage());
  const isAuthenticated = ref<boolean>(!!user.value.firstName && !!user.value.secondName);

  watch(user, () => {
    isAuthenticated.value = !!user.value.firstName && !!user.value.secondName;
  });

  return {
    isAuthenticated,
  };
});