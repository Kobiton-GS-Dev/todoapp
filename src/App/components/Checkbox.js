import React, { memo, useContext } from 'react';
import styled from 'styled-components';
import { TaskContext } from '../contexts/taskContext';

const CheckBox = styled.input`
  height: 40px;
  background: none;
  opacity: 0;
  text-align: center;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  bottom: 10;
  margin: auto 0;
  border: none;
  -webkit-appearance: none;
  appearance: none;

  &:checked + .data-label {
    background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
  }
`;

const RoundCheckBox = memo((props) => {
  const { updateData } = useContext(TaskContext);
  const task = props;
  const markCompleted = () => {
    if (task.isCompleted) {
      updateData({
        id: task._id,
        isCompleted: false,
      });
    } else {
      updateData({
        id: task._id,
        isCompleted: true,
      });
    }
  };

  return (
    <CheckBox
      type="checkbox"
      checked={task.isCompleted}
      onChange={() => markCompleted()}
    />
  );
});

export default RoundCheckBox;
