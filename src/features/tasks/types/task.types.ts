export interface Task {
  id: number;
  name: string;
  status: "Новая" | "В работе" | "Завершена";
  createdAt: string;
}
