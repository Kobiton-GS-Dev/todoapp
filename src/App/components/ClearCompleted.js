import React from 'react'
import styled from 'styled-components'

const StyledClearBtn = styled.button`
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

const ClearCompleted = (props) => {
  return (
    <StyledClearBtn>Clear Completed</StyledClearBtn>
  )
}

export default ClearCompleted
