import React, { useContext } from 'react'
import styled from 'styled-components'
import { TaskContext } from '../contexts/taskContext';

export const StyledClearBtn = styled.button`
  margin-left: auto;
  order: 2;
  position: relative;
  line-height: 20px;
  text-decoration: none;
  cursor: pointer;

  &:active {
    margin-left: auto;
    order: 2;
    position: relative;
    line-height: 20px;
    text-decoration: none;
    cursor: pointer;
  }
`

export const ClearCompleted = () => {

  const { completedItems, deleteData } = useContext(TaskContext)
  const clearCompleted = () => {
    completedItems.forEach((task) => {
      deleteData(task._id)
    })
  }

  return (
    <StyledClearBtn onClick={() => clearCompleted()}>Clear Completed</StyledClearBtn>
  )
}
