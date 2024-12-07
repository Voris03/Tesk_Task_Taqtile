// Проверка email на корректность
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Проверка обязательных полей
export const isFieldEmpty = (value: string): boolean => {
  return value.trim() === "";
};

// Пример валидации текста (например, минимальная длина)
export const validateTextLength = (
  text: string,
  minLength: number
): boolean => {
  return text.trim().length >= minLength;
};
