import { ContactFormValues } from "../types/contactForm.types"; // Импорт интерфейса

export const validateContactForm = (values: ContactFormValues) => {
  const errors: Partial<ContactFormValues> = {};

  if (!values.name.trim()) {
    errors.name = "Имя обязательно для заполнения.";
  }

  if (!values.email.trim()) {
    errors.email = "Электронная почта обязательна для заполнения.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Введите корректный адрес электронной почты.";
  }

  if (!values.message.trim()) {
    errors.message = "Сообщение обязательно для заполнения.";
  }

  return errors;
};