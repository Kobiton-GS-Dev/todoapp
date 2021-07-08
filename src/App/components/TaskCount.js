import React, { useContext } from 'react';
import styled from 'styled-components';
import { TaskContext } from '../contexts/taskContext';

const StyledTaskCount = styled.span`
  text-align: left;
`;
const TaskCount = () => {
  const { taskData } = useContext(TaskContext);

  function checkUncompleted(task) {
    return task.isCompleted === false;
  }

  const activeTask = taskData.filter(checkUncompleted);

  return (
    <StyledTaskCount>
      <strong>{activeTask.length}</strong>
      <span> </span>
      <span>{activeTask.length > 1 ? 'items' : 'item'}</span>
      <span> left</span>
    </StyledTaskCount>
  );
};

export default TaskCount;
