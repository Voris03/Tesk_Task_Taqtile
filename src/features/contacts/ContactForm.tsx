import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import styled from "styled-components";

// Стили для формы
const FormWrapper = styled(Paper)`
  max-width: 500px;
  margin: 50px auto;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  background: linear-gradient(to bottom, #ffffff, #f7f7f7);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  }
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 20px;
`;

const StyledButton = styled(Button)`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
`;

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Проверка на заполнение полей
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Пожалуйста, заполните все поля!");
      return;
    }

    // Вывод данных в консоль в формате JSON
    const formData = {
      name,
      email,
      message,
    };
    console.log("Отправлено:", JSON.stringify(formData, null, 2));

    // Очистка формы
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <FormWrapper>
      <Typography variant="h5" gutterBottom align="center">
        Свяжитесь с нами
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <StyledTextField
          label="Имя"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          fullWidth
        />
        <StyledTextField
          label="Электронная почта"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          fullWidth
        />
        <StyledTextField
          label="Сообщение"
          variant="outlined"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          fullWidth
        />
        <StyledButton
          type="submit"
          variant="contained"
          color="primary"
        >
          Отправить
        </StyledButton>
      </Box>
    </FormWrapper>
  );
};

export default ContactForm;