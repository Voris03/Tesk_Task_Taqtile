import React, { useState } from "react";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";
import styled from "styled-components";

const FormWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  border-radius: 8px;
  background: #f5f5f5;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  // Исправление для корректного отображения модального окна
  z-index: 0; // Уровень модального окна Material-UI
  position: relative; // Чтобы элементы внутри не вылезали за границы
`;

const StyledFormControl = styled(FormControl)`
  position: relative;

  label {
    z-index: 3; // Лейблы теперь всегда наверху
    background: #f5f5f5; // Подложка, чтобы лейбл не перекрывался
    padding: 0 4px;
    margin-left: -4px;
  }
`;

interface TaskFormProps {
  onAddTask: (task: { name: string; status: string }) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Новая");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() === "") {
      alert("Название задачи не может быть пустым!");
      return;
    }
    onAddTask({ name, status });
    setName("");
    setStatus("Новая");
  };

  return (
    <FormWrapper
      as="form"  
      onSubmit={handleSubmit}
    >
      <TextField
        label="Название задачи"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        InputLabelProps={{
          style: { zIndex: 3, background: "#f5f5f5", padding: "0 4px" }, // Лейбл поверх всего
        }}
      />
      <StyledFormControl>
        <InputLabel id="status-label">Статус</InputLabel>
        <Select
          labelId="status-label"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <MenuItem value="Новая">Новая</MenuItem>
          <MenuItem value="В работе">В работе</MenuItem>
          <MenuItem value="Завершена">Завершена</MenuItem>
        </Select>
      </StyledFormControl>
      <Button type="submit" variant="contained" color="primary">
        Добавить задачу
      </Button>
    </FormWrapper>
  );
};

export default TaskForm;