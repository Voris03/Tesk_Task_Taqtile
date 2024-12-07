import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

interface TaskFormProps {
  onAddTask: (task: {
    name: string;
    status: "Новая" | "В работе" | "Завершена";
  }) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"Новая" | "В работе" | "Завершена">(
    "Новая"
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Введите название задачи");
      return;
    }
    onAddTask({ name, status });
    setName("");
    setStatus("Новая");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        marginBottom: 3,
        "@media (max-width: 330px)": {
          gap: 1,
        },
      }}
    >
      <TextField
        label="Название задачи"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <FormControl>
        <InputLabel id="status-label">Статус</InputLabel>
        <Select
          labelId="status-label"
          value={status}
          onChange={(e) =>
            setStatus(e.target.value as "Новая" | "В работе" | "Завершена")
          }
        >
          <MenuItem value="Новая">Новая</MenuItem>
          <MenuItem value="В работе">В работе</MenuItem>
          <MenuItem value="Завершена">Завершена</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Добавить
      </Button>
    </Box>
  );
};

export default TaskForm;
