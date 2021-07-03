import React, { createContext } from 'react';

const taskData = [
  {
    id: 1,
    title: 'do homework',
    isCompleted: true,
  },
  {
    id: 2,
    title: 'create',
    isCompleted: false,
  }
];

export const TaskContext = createContext();

export const TaskProvider = (props) => (
  <TaskContext.Provider value={taskData}>
    {props.children}
  </TaskContext.Provider>
);
