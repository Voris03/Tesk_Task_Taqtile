// src/utils/formatDate.ts

// Форматирует дату в строку
export const formatDate = (date: string | Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("ru-RU", options);
  };
  
  // Преобразование в ISO строку
  export const toISODate = (date: Date): string => {
    return date.toISOString().split("T")[0];
  };
  
  // Пример: Добавление дней к дате
  export const addDays = (date: Date, days: number): Date => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };