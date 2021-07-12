import React, { useContext } from 'react';
import styled from 'styled-components';
import ClipLoader from 'react-spinners/ClipLoader';
import { TaskContext } from '../contexts/taskContext';
import Header from './Header';
import TasksList from './TasksList';
import Footer from './Footer';

const Wrapper = styled.div`
  width: 500px;
  background: #fff;
  margin: 130px auto;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`;

const SpinContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const TodoApp = () => {
  const { taskData, isLoading } = useContext(TaskContext);

  return (
    <>
      {isLoading ? (
        <SpinContainer>
          <ClipLoader color="B34D4D" loading={isLoading} size={100} />
        </SpinContainer>
      ) : (
        <Wrapper>
          <Header />
          <TasksList />
          {taskData.length > 0 ? <Footer /> : <></>}
        </Wrapper>
      )}
    </>
  );
};

export default TodoApp;
