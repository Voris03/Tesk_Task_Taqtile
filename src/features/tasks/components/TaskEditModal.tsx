import React, { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import CustomModal from "../../../components/CustomModal";
import { Task } from "../types/task.types";

interface TaskEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  task: Task;
  onSave: (updatedTask: Task) => void;
}

const TaskEditModal: React.FC<TaskEditModalProps> = ({
  isOpen,
  onClose,
  task,
  onSave,
}) => {
  const [name, setName] = useState(task.name);
  const [status, setStatus] = useState<Task["status"]>(task.status);

  // Обработчик сохранения изменений
  const handleSave = () => {
    if (!name.trim()) {
      alert("Название задачи не может быть пустым!");
      return;
    }
    onSave({ ...task, name, status });
    onClose();
  };

  return (
    <CustomModal isOpen={isOpen} onClose={onClose}>
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          padding: 3,
          borderRadius: 2,
          backgroundColor: "white",
          "@media (max-width: 330px)": {
            padding: 2,
          },
        }}
      >
        <Typography variant="h6" gutterBottom>
          Редактировать задачу
        </Typography>
        {/* Поле для ввода названия задачи */}
        <TextField
          label="Название задачи"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          sx={{
            marginBottom: 2,
            "@media (max-width: 330px)": {
              fontSize: "14px",
            },
          }}
        />
        {/* Выпадающий список для изменения статуса */}
        <FormControl fullWidth sx={{ marginBottom: 3 }}>
          <InputLabel id="status-label">Статус задачи</InputLabel>
          <Select
            labelId="status-label"
            value={status}
            onChange={(e) => setStatus(e.target.value as Task["status"])}
          >
            <MenuItem value="Новая">Новая</MenuItem>
            <MenuItem value="В работе">В работе</MenuItem>
            <MenuItem value="Завершена">Завершена</MenuItem>
          </Select>
        </FormControl>
        {/* Кнопки сохранения и отмены */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            "@media (max-width: 330px)": {
              flexDirection: "column",
              gap: 2,
            },
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
            sx={{
              "@media (max-width: 330px)": {
                width: "100%",
              },
            }}
          >
            Сохранить
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={onClose}
            sx={{
              "@media (max-width: 330px)": {
                width: "100%",
              },
            }}
          >
            Отмена
          </Button>
        </Box>
      </Box>
    </CustomModal>
  );
};

export default TaskEditModal;
