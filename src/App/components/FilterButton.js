import React, { memo } from 'react';
import styled from 'styled-components';

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

export const getAll = () => {
  // get all tasks
};

export const getActive = () => {
  // get all active tasks
};

export const getCompleted = () => {
  // get all completed tasks
};

const FilterButtons = () => {
  const filterBtn = [
    {
      key: 1,
      title: 'All',
      isSelected: true,
      onClick: getAll,
      link: '',
    },
    {
      key: 2,
      title: 'Active',
      isSelected: false,
      onClick: getActive,
      link: '',
    },
    {
      key: 3,
      title: 'Completed',
      isSelected: false,
      onClick: getCompleted,
      link: '',
    },
  ];

  return (
    <>
      {
        filterBtn.map((btn) => (
          <>
            <StyledFilterButton>
              <div
                className={`${btn.isSelected ? 'selected' : ''}`}
                onClick={btn.onClick}
              >
                { btn.title }
              </div>
            </StyledFilterButton>
          </>
        ))
      }
    </>
  );
};

export default FilterButtons;
