import React, {
  memo, useContext, useState, useEffect,
} from 'react';
import styled from 'styled-components';
import { TaskContext } from '../contexts/taskContext';

const StyledFilterButton = styled.li`
  cursor: pointer;

  & div {
    color: inherit;
    margin: -3px 3px 3px 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;

    &.selected {
      border-color: rgba(175, 47, 47, 0.2);
    }
  }
`;

const FilterButtons = () => {
  const { taskData, setFilteredData } = useContext(TaskContext);
  const [activeButton, setActiveButton] = useState('ALL');

  const getAll = () => {
    // get all tasks
    setFilteredData(taskData);
    setActiveButton('ALL');
  };

  const getActive = () => {
    // get all active tasks
    const activeTasks = taskData.filter((task) => task.isCompleted === false);
    setFilteredData(activeTasks);
    setActiveButton('ACTIVE');
  };

  const getCompleted = () => {
    // get all completed tasks
    const completedTasks = taskData.filter((task) => task.isCompleted === true);
    setFilteredData(completedTasks);
    setActiveButton('COMPLETED');
  };

  useEffect(() => {
    setFilteredData(taskData);
  }, []);

  const filterBtn = [
    {
      key: 1,
      title: 'All',
      isSelected: activeButton === 'ALL',
      onClick: getAll,
      link: '',
    },
    {
      key: 2,
      title: 'Active',
      isSelected: activeButton === 'ACTIVE',
      onClick: getActive,
      link: '',
    },
    {
      key: 3,
      title: 'Completed',
      isSelected: activeButton === 'COMPLETED',
      onClick: getCompleted,
      link: '',
    },
  ];

  return (
    <>
      {filterBtn.map((btn) => (
        <>
          <StyledFilterButton>
            <div
              className={`${btn.isSelected ? 'selected' : ''}`}
              onClick={btn.onClick}
            >
              {btn.title}
            </div>
          </StyledFilterButton>
        </>
      ))}
    </>
  );
};

export default FilterButtons;
