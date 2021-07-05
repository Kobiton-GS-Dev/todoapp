import React, { memo, useContext } from 'react';
import styled from 'styled-components';
import { TaskContext } from '../contexts/taskContext';

const StyledTaskCount = styled.span`
  text-align: left;
`;
const TaskCount = () => {
  const { activeItems } = useContext(TaskContext);

  return (
    <StyledTaskCount>
      <strong>{activeItems}</strong>
      <span> </span>
      <span>
        {activeItems > 1 ? 'items' : 'item'}
      </span>
      <span> left</span>
    </StyledTaskCount>
  );
};

export default TaskCount;
