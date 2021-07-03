import React ,{ memo } from 'react'
import styled from 'styled-components'

const StyledFilterButton = styled.li`
  display: inline;
  cursor: pointer;

  & a {
    color: inherit;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
  }

  & a.selected {
    border-color: rgba(175, 47, 47, 0.2);
  }
`

export const getAll = () => {
  // get all tasks
}

export const getActive = () => {
  //get all active tasks
}

export const getCompleted = () => {
  // get all completed tasks
}

const FilterButton = (props) => {
  const { title, isSelected, onClick, link } = props  
  return (
    <>
      <StyledFilterButton>
        <a 
          href= {` #/${ link } `}
          className= {`${isSelected ? 'selected' : ''}`} 
          onClick= { onClick }
        >
          { title }
        </a>
      </StyledFilterButton>
      <span></span>
    </>
  )
}

export default FilterButton
