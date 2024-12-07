// src/features/tasks/components/TaskTable.tsx

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { Task } from "../types/task.types";

interface TaskTableProps {
  tasks: Task[];
  onDeleteTask: (id: number) => void;
  onEditTask: (task: Task) => void;
}

const TaskTable: React.FC<TaskTableProps> = ({
  tasks,
  onDeleteTask,
  onEditTask,
}) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        "@media (max-width: 330px)": {
          overflowX: "auto", // Горизонтальный скролл
        },
      }}
    >
      <Table>
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
              <TableCell>
                {new Date(task.createdAt).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <Button color="primary" onClick={() => onEditTask(task)}>
                  Редактировать
                </Button>
                <Button color="secondary" onClick={() => onDeleteTask(task.id)}>
                  Удалить
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaskTable;
