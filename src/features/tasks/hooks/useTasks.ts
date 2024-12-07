// src/features/tasks/hooks/useTasks.ts

import { useState, useEffect } from "react";
import { Task } from "../types/task.types";
import { loadFromLocalStorage, saveToLocalStorage } from "../../../utils/localStorage";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedTasks = loadFromLocalStorage<Task[]>("tasks");
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    saveToLocalStorage("tasks", tasks);
  }, [tasks]);

  const addTask = (task: { name: string; status: "Новая" | "В работе" | "Завершена" }) => {
    const newTask: Task = {
      id: tasks.length + 1,
      name: task.name,
      status: task.status,
      createdAt: new Date().toISOString(),
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (updatedTask: Task) => {
    setTasks(
      tasks.map((task) =>
        task.id === updatedTask.id ? { ...task, ...updatedTask } : task
      )
    );
  };

  return { tasks, addTask, deleteTask, updateTask };
};