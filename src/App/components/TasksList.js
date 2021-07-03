import React, { memo, useContext } from 'react';
import styled from 'styled-components'
import { TaskContext } from '../contexts/taskContext'
import Tasks from './Tasks'
import ToggleAllButton from './ToggleAll'

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

const TasksList = memo(() => {

  const taskData = useContext(TaskContext)

  return (
    <TaskContainer>
      <ToggleAllButton />
      <List>
        { 
          taskData.map((task) => <Tasks {...task}/>)
        }
      </List>
    </TaskContainer>
  )
})

export default TasksList
