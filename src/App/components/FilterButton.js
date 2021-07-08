import React, { useContext } from 'react';
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
  const {
    activeFilter, getAll, getActive, getCompleted,
  } = useContext(TaskContext);

  const filterBtn = [
    {
      key: 1,
      title: 'All',
      isSelected: activeFilter === 'ALL',
      onClick: getAll,
    },
    {
      key: 2,
      title: 'Active',
      isSelected: activeFilter === 'ACTIVE',
      onClick: getActive,
    },
    {
      key: 3,
      title: 'Completed',
      isSelected: activeFilter === 'COMPLETED',
      onClick: getCompleted,
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
