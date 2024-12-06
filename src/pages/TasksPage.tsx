// src/pages/TasksPage.tsx
import React from 'react';
import TaskTable from '../features/tasks/TaskTable';

const TasksPage: React.FC = () => {
  return (
    <div>
      <h1>Задачи 5S</h1>
      <TaskTable />
    </div>
  );
};

export default TasksPage;