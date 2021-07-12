import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { TaskContext } from '../contexts/taskContext';

const BaseInput = styled.input`
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const AddTodo = styled(BaseInput)`
  padding: 16px 16px 16px 60px;
  border: none;
  outline: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
  &:placeholder-shown {
    font-style: italic;
    color: #d9d9d9;
  }
`;

const Title = styled.h1`
  position: absolute;
  top: -155px;
  width: 100%;
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;
`;

const Header = () => {
  const [input, setInput] = useState('');
  const { postData } = useContext(TaskContext);
  const ENTER = 'Enter';
  const onEnter = (e) => {
    if (e.key === ENTER && input) {
      postData({
        title: input,
        isCompleted: false,
      });
      setInput('');
    }
  };

  return (
    <header>
      <Title> todos </Title>
      <AddTodo
        placeholder="What needs to be done?"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyPress={(e) => onEnter(e)}
        value={input}
      />
    </header>
  );
};

export default Header;
