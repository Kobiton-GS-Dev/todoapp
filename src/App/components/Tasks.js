import React, { memo, useContext } from 'react';
import styled from 'styled-components';
import { TaskContext } from '../contexts/taskContext';
import { DeleteButton } from './DeleteBtn';
import RoundCheckBox from './Checkbox';

const ListItem = styled.li`
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;

  &:hover .DeleteBtn {
      display: block;
      cursor: pointer;
  };

  &.editing:last-child {
    margin-bottom: -1px;
  }

  &.editing {
    border-bottom: none;
    padding: 0;
  }

  &.editing .edit{
    display: block;
    width: 90%;
    padding: 12px 16px;
    margin: 0 0 0 10%;
  }

  &.completed .Data{
    color: #d9d9d9;
    text-decoration: line-through;
  }
`;

const DataLabel = styled.label`
  background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: center left;
  word-break: break-all;
  padding: 15px 15px 15px 60px;
  display: block;
  line-height: 1.2;
  transition: color 0.4s;
`;

const Tasks = memo(() => {
  const { data, setData } = useContext(TaskContext);

  return (
    <>
      {
        data.map((task) => (
          <ListItem>
            <>
              <RoundCheckBox {...task} />
              <DataLabel className="Data">
                {' '}
                {task.title}
                {' '}
              </DataLabel>
              <DeleteButton className="DeleteBtn" />
            </>
          </ListItem>
        ))
      }
    </>
  );
});

export default Tasks;
