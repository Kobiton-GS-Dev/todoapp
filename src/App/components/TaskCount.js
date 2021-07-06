import React, { memo, useContext } from 'react';
import styled from 'styled-components';
import { TaskContext } from '../contexts/taskContext';

const StyledTaskCount = styled.span`
  text-align: left;
`;
const TaskCount = () => {
  const { numOfActiveItems } = useContext(TaskContext);

  return (
    <StyledTaskCount>
      <strong>{numOfActiveItems}</strong>
      <span> </span>
      <span>
        {numOfActiveItems > 1 ? 'items' : 'item'}
      </span>
      <span> left</span>
    </StyledTaskCount>
  );
};

export default TaskCount;
