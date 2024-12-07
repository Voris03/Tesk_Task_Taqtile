import { useState } from "react";
import { validateContactForm } from "../utils/contactValidation";
import { ContactFormValues } from "../types/contactForm.types"; // Импорт интерфейса

export const useContactForm = () => {
  const [values, setValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<ContactFormValues>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateContactForm(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Данные отправлены:", values);
    setValues({ name: "", email: "", message: "" });
  };

  return { values, errors, handleChange, handleSubmit };
};