import React, { memo } from 'react';
import styled from 'styled-components';
import Tasks from './Tasks';
import ToggleAllButton from './ToggleAll';

const TaskContainer = styled.section`
  position: relative;
  z-index: 2;
  border-top: 1px solid #e6e6e6;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const TasksList = memo(() => (
  <TaskContainer>
    <ToggleAllButton />
    <List>
      <Tasks />
    </List>
  </TaskContainer>
));

export default TasksList;
