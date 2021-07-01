import React ,{ memo } from 'react'
import styled from 'styled-components'
import Tasks from './Tasks'

const TaskContainer = styled.section`
  position: relative;
  z-index: 2;
  border-top: 1px solid #e6e6e6;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const TasksList = memo((props) => {
  return (
    <TaskContainer>
      {/* <input className = "toggle-all"/>
      <label htmlFor = "toggle-all"></label> */}
      <List>
        <Tasks/>
      </List>
    </TaskContainer>
  )
})

export default TasksList