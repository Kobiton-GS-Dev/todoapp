import React, { PropsTypes } from 'react'
import styled from 'styled-components'
//css
import './css/homepage.css'
//components
import Header from './components/Header'
import TasksList from './components/TasksList'

const App = () => {
  return (
    <div className="todoApp">
      <Header />
      <TasksList />
    </div>
  )
}

export default App
