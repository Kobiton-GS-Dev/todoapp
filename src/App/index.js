import React, { PropsTypes } from 'react'
import styled from 'styled-components'

const Wrapper = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
`

const App = () => {
  return <Wrapper>Mini Todo App</Wrapper>
}

export default App
