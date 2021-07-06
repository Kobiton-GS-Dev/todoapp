import React from 'react'
import styled from 'styled-components'

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
  return(
    <StyledClearBtn>Clear Completed</StyledClearBtn>
  )
}
