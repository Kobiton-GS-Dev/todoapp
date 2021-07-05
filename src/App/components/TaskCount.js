import React ,{ memo } from 'react'
import styled from 'styled-components'

const StyledTaskCount = styled.span`
  text-align: left;
`
const TaskCount = () => {
  return(
    <StyledTaskCount>
      <strong>1</strong>
      <span> </span>
      <span>item</span>
      <span> left</span>
    </StyledTaskCount>
  )
}

export default TaskCount
