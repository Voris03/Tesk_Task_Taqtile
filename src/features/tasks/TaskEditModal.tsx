import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Button, TextField, Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';
import styled from 'styled-components';

// Стили для модального окна
const ModalContent = styled(Box)`
  width: 100%;
  max-width: 500px; /* Ограничиваем ширину */
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  margin: 50px auto;
  position: relative;
`;

// Стили для кнопок
const StyledButton = styled(Button)`
  width: 100%; /* Делает кнопку широкой */
  margin-top: 10px;
`;

interface TaskEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  task: { id: number; name: string; status: string; createdAt: string };
  onSave: (updatedTask: { id: number; name: string; status: string }) => void;
}

const TaskEditModal: React.FC<TaskEditModalProps> = ({ isOpen, onClose, task, onSave }) => {
  const [name, setName] = useState(task.name);
  const [status, setStatus] = useState(task.status);

  // Синхронизация данных задачи при открытии модального окна
  useEffect(() => {
    if (task) {
      setName(task.name);
      setStatus(task.status);
    }
  }, [task]);

  const handleSave = () => {
    onSave({ id: task.id, name, status });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false}>
      <ModalContent>
        <FormControl fullWidth margin="normal">
          <TextField
            label="Название задачи"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </FormControl>
        <FormControl fullWidth margin="normal">
          <InputLabel id="edit-status-label">Статус</InputLabel>
          <Select
            labelId="edit-status-label"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <MenuItem value="Новая">Новая</MenuItem>
            <MenuItem value="В работе">В работе</MenuItem>
            <MenuItem value="Завершена">Завершена</MenuItem>
          </Select>
        </FormControl>
        <StyledButton variant="contained" color="primary" onClick={handleSave}>
          Сохранить
        </StyledButton>
        <StyledButton variant="outlined" color="secondary" onClick={onClose}>
          Отмена
        </StyledButton>
      </ModalContent>
    </Modal>
  );
};

export default TaskEditModal;