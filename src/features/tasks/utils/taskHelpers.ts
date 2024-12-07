// src/features/tasks/utils/taskHelpers.ts

import { Task } from "../types/task.types";

// Фильтрация задач по статусу
export const filterTasks = (tasks: Task[], status: string): Task[] => {
  if (status === "Все") return tasks;
  return tasks.filter((task) => task.status === status);
};

// Сортировка задач по дате создания
export const sortTasksByDate = (tasks: Task[], order: "asc" | "desc" = "asc"): Task[] => {
  return tasks.sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return order === "asc" ? dateA - dateB : dateB - dateA;
  });
};