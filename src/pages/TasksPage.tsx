import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import TaskForm from "../features/tasks/components/TaskForm";
import TaskTable from "../features/tasks/components/TaskTable";
import TaskEditModal from "../features/tasks/components/TaskEditModal";
import DeleteConfirmationModal from "../features/tasks/components/DeleteConfirmationModal";
import { useTasks } from "../features/tasks/hooks/useTasks";
import { Task } from "../features/tasks/types/task.types";

const TasksPage: React.FC = () => {
  const { tasks, addTask, deleteTask, updateTask } = useTasks();

  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [deletingTaskId, setDeletingTaskId] = useState<number | null>(null);

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
  };

  const handleDeleteTask = (id: number) => {
    setDeletingTaskId(id);
  };

  const handleSaveTask = (updatedTask: Task) => {
    updateTask(updatedTask);
    setEditingTask(null);
  };

  const handleConfirmDelete = () => {
    if (deletingTaskId !== null) {
      deleteTask(deletingTaskId);
      setDeletingTaskId(null);
    }
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Управление задачами
      </Typography>
      <TaskForm onAddTask={addTask} />
      <TaskTable
        tasks={tasks}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
      />
      {editingTask && (
        <TaskEditModal
          isOpen={!!editingTask}
          task={editingTask}
          onClose={() => setEditingTask(null)}
          onSave={handleSaveTask}
        />
      )}
      {deletingTaskId !== null && (
        <DeleteConfirmationModal
          isOpen={!!deletingTaskId}
          onClose={() => setDeletingTaskId(null)}
          onConfirm={handleConfirmDelete}
        />
      )}
    </Box>
  );
};

export default TasksPage;
