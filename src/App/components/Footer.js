import React ,{ memo } from 'react'
import styled from 'styled-components'
import TaskCount from './TaskCount'
import FilterButton from './FilterButton'
import { getAll, getActive, getCompleted} from './FilterButton'
import ClearCompleted from './ClearCompleted'

const StyledFooter = styled.footer`
  color: #777;
  padding: 10px 15px;
  height: 20px;
  text-align: center;
  border-top: 1px solid #e6e6e6;

  &:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }
`

const ListFilter = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    right: 0;
    left: 0;
`

const StyledFilterButton = styled.li`
  display: inline;
  cursor: pointer;

  & a {
    color: inherit;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
  }

  & a.selected {
    border-color: rgba(175, 47, 47, 0.2);
  }
`

const Footer = memo((props) => {
  const filterBtn = [
    {
      key: 'all_btn',
      title: 'All',
      isSelected: true,
      onClick: getAll,
      link: ''
    },
    {
      key: 'active_btn',
      title: 'Active',
      isSelected: false,
      onClick: getActive,
      link: ''
    },
    {
      key: 'completed_btn',
      title: 'Completed',
      isSelected: false,
      onClick: getCompleted,
      link: ''
    }
  ]

  return (
    <StyledFooter>
      <TaskCount />
      <ListFilter>
        {
          filterBtn.map(btn => (
            <FilterButton {...btn}/>
          ))
        }
      </ListFilter>
      <ClearCompleted />
    </StyledFooter>
  )
})

export default Footer
