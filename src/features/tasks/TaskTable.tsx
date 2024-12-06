import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
} from "@mui/material";
import TaskForm from "./TaskForm";
import TaskEditModal from "./TaskEditModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal"; // Подключаем модальное окно удаления
import styled from "styled-components";

const StyledTable = styled(Table)`
  border-collapse: separate;
  border-spacing: 0;
  thead {
    background-color: #f5f5f5;
  }
  th {
    font-weight: bold;
    text-align: left;
    padding: 10px;
  }
  td {
    padding: 10px;
  }
  tbody tr:nth-child(odd) {
    background-color: #f9f9f9;
  }
  tbody tr:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }
`;

const TableWrapper = styled.div`
  margin-top: 20px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TaskTable: React.FC = () => {
  const [tasks, setTasks] = useState<
    { id: number; name: string; status: string; createdAt: string }[]
  >([]);

  const [editingTask, setEditingTask] = useState<null | {
    id: number;
    name: string;
    status: string;
    createdAt: string;
  }>(null);

  const [deleteTaskId, setDeleteTaskId] = useState<null | number>(null); // Храним ID задачи для удаления

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task: { name: string; status: string }) => {
    const newTask = {
      id: tasks.length + 1,
      name: task.name,
      status: task.status,
      createdAt: new Date().toISOString().split("T")[0],
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = () => {
    if (deleteTaskId !== null) {
      setTasks(tasks.filter((task) => task.id !== deleteTaskId));
      setDeleteTaskId(null);
    }
  };

  const saveTask = (updatedTask: {
    id: number;
    name: string;
    status: string;
  }) => {
    setTasks(
      tasks.map((task) =>
        task.id === updatedTask.id ? { ...task, ...updatedTask } : task
      )
    );
  };

  const openEditModal = (task: {
    id: number;
    name: string;
    status: string;
    createdAt: string;
  }) => {
    setEditingTask(task);
  };

  return (
    <TableWrapper>
      <Typography variant="h5" gutterBottom>
        Список задач
      </Typography>
      <TaskForm onAddTask={addTask} />
      <TableContainer component={Paper}>
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Название</TableCell>
              <TableCell>Статус</TableCell>
              <TableCell>Дата создания</TableCell>
              <TableCell>Действия</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell>{task.id}</TableCell>
                <TableCell>{task.name}</TableCell>
                <TableCell>{task.status}</TableCell>
                <TableCell>{task.createdAt}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => openEditModal(task)}
                    style={{ marginRight: "10px" }}
                  >
                    Редактировать
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    onClick={() => setDeleteTaskId(task.id)}
                  >
                    Удалить
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </StyledTable>
      </TableContainer>
      {editingTask && (
        <TaskEditModal
          isOpen={!!editingTask}
          onClose={() => setEditingTask(null)}
          task={editingTask}
          onSave={saveTask}
        />
      )}
      {deleteTaskId !== null && (
        <DeleteConfirmationModal
          isOpen={deleteTaskId !== null}
          onClose={() => setDeleteTaskId(null)}
          onConfirm={deleteTask}
        />
      )}
    </TableWrapper>
  );
};

export default TaskTable;
