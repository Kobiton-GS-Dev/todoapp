import React ,{ memo } from 'react'

const Tasks = memo((props) => {

  return(
    <li>
        <div className="view">
          <input className = "toggle"/>
          <label> mock data </label>
          <button className="delete"></button>
        </div>
    </li>
  )
})

export default Tasks