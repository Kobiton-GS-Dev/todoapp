import React ,{ memo } from 'react'
import Tasks from './Tasks'

const TasksList = memo((props) => {
  return (
    <section className = "main">
      <input className = "toggle-all"/>
      <label htmlFor = "toggle-all"></label>
      <ul className = "tasks-list">
        <Tasks/>
      </ul>
    </section>
  )
})

export default TasksList