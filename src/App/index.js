import React, { PropsTypes, PureComponent } from 'react'
//components
import TodoApp from './components/TodoApp'
import { GlobalStyle } from './components/Global'

class App extends PureComponent {
  render() {
    return (
      <>
        <GlobalStyle />
        <TodoApp />
      </>
    )
  }
}

export default App
