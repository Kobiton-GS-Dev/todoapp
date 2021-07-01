import React ,{ memo } from 'react'
import styled from 'styled-components'
import RoundCheckBox from './Checkbox'
import { DeleteButton } from './DeleteBtn'
import { DataLabel } from './DataLabel'

const ListItem = styled.li`
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;

  &:hover, DeleteButton {
      display: block;
      cursor: pointer;
  };

  DeleteButton:after {
    content: '×';
  }
`

const Tasks = memo((props) => {

  return(
    <ListItem>
        <div>
          
          <DataLabel> mock data </DataLabel>
          <DeleteButton />
        </div>
    </ListItem>
  )
})

export default Tasks