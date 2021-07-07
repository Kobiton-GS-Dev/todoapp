import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { TaskContext } from '../contexts/taskContext';

const ToggleAll = styled.input`
  background: none;
  text-align: center;
  border: none;
  opacity: 0;
  position: absolute;

  & + label {
    width: 60px;
    height: 34px;
    font-size: 0;
    position: absolute;
    top: -52px;
    left: -13px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    cursor: pointer;
  }

  & + label:before {
    content: '❯';
    font-size: 22px;
    color: #e6e6e6;
    padding: 10px 27px 10px 27px;
  }

  &:checked + label:before {
    color: #737373;
  }
`;
const ToggleAllButton = () => {
  const {
    isCompletedAll, setIsCompletedAll, taskData, updateData,
  } = useContext(TaskContext);
  const checkAllTasks = () => {
    if (isCompletedAll === false) {
      taskData.forEach((task) => {
        updateData({
          id: task._id,
          isCompleted: true,
        });
      });
      setIsCompletedAll(true);
    } else {
      taskData.forEach((task) => {
        updateData({
          id: task._id,
          isCompleted: false,
        });
      });
      setIsCompletedAll(false);
    }
  };

  return (
    <div>
      <ToggleAll type="checkbox" checked={isCompletedAll} />
      <label onClick={checkAllTasks} />
    </div>
  );
};

export default ToggleAllButton;
