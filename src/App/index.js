import React, { PropsTypes } from 'react'
//components
import TodoApp from './components/TodoApp'
import { GlobalStyle } from './components/Global'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <TodoApp />
    </>
  )
}

export default App
