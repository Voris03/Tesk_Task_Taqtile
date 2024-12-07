import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useContactForm } from "../hooks/useContactForm";
import CustomTextField from "../../../components/CustomTextField";

const ContactForm: React.FC = () => {
  const { values, errors, handleChange, handleSubmit } = useContactForm();

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 500, margin: "auto", padding: "20px" }}
    >
      <Typography variant="h5" gutterBottom align="center">
        Свяжитесь с нами
      </Typography>
      <CustomTextField
        label="Имя"
        name="name"
        value={values.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={errors.name}
        fullWidth
        required
      />
      <CustomTextField
        label="Электронная почта"
        name="email"
        value={values.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
        fullWidth
        required
      />
      <CustomTextField
        label="Сообщение"
        name="message"
        value={values.message}
        onChange={handleChange}
        error={!!errors.message}
        helperText={errors.message}
        fullWidth
        multiline
        rows={4}
        required
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Отправить
      </Button>
    </Box>
  );
};

export default ContactForm;
