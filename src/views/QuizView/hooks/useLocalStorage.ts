export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const getLocalStorage = () => {
    const localStorageValue = localStorage.getItem(key);

    if (localStorageValue === null) {
      return initialValue;
    }

    return JSON.parse(localStorageValue) as T;
  };

  const setLocalStorage = (value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  return {
    getLocalStorage,
    setLocalStorage,
  };
};