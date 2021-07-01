import React, { PropsTypes } from 'react'
import styled from 'styled-components'
import Header from './Header'
import TasksList from './TasksList'

const Wrapper = styled.div`
  width: 500px;
  background: #fff;
  margin: 130px auto;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`

const TodoApp = () => {
  return (
    <Wrapper>
      <Header />
      <TasksList />
    </Wrapper>
  )
}

export default TodoApp
