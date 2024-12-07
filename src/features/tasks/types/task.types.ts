// src/features/tasks/types/task.types.ts

export interface Task {
    id: number; // Уникальный идентификатор задачи
    name: string; // Название задачи
    status: "Новая" | "В работе" | "Завершена"; // Статус задачи
    createdAt: string; // Дата создания задачи в формате ISO
  }