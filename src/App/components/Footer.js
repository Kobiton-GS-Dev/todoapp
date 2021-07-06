import React, { memo, useContext } from 'react';
import styled from 'styled-components';
import { TaskContext } from '../contexts/taskContext';
import TaskCount from './TaskCount';
import FilterButtons from './FilterButton';
import { ClearCompleted, StyledClearBtn } from './ClearCompleted';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  color: #777;
  padding: 10px 15px;
  height: 20px;
  text-align: center;
  border-top: 1px solid #e6e6e6;

  &:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }
`;

const ListFilter = styled.ul`
  display:flex;
  flex-shrink: 3;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  right: 0;
  left: 0;
`;

const Footer = memo(() => {

  const { completedItems } = useContext(TaskContext)

  return (
    <StyledFooter>
      <TaskCount />
      <ListFilter>
        <FilterButtons />
      </ListFilter>
      { 
        completedItems.length ? 
          <ClearCompleted /> 
          : <StyledClearBtn /> 
      }
    </StyledFooter>
  )
})

export default Footer;
