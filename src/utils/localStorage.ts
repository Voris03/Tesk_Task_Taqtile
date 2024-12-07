// src/utils/localStorage.ts

// Сохранение данных в localStorage
export const saveToLocalStorage = (key: string, value: any): void => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
  // Загрузка данных из localStorage
  export const loadFromLocalStorage = <T>(key: string): T | null => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  };
  
  // Удаление данных из localStorage
  export const removeFromLocalStorage = (key: string): void => {
    localStorage.removeItem(key);
  };