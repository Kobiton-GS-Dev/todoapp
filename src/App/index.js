import React from 'react';

import TodoApp from './components/TodoApp';
import { GlobalStyle } from './components/Global';
import { TaskProvider } from './contexts/taskContext';

const App = () => (
  <TaskProvider>
    <GlobalStyle />
    <TodoApp />
  </TaskProvider>
);

export default App;
