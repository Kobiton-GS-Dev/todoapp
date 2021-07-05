import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import sortArray from 'sort-array'

export const TaskContext = createContext();

export const TaskProvider = (props) => {
  const [ taskData, setTaskData ] = useState([])
  const [ activeItems, setActiveItems ] = useState(0)
  const [ taskEditingId, setTaskEditingId ] = useState('')
  const [isCompletedAll, setIsCompletedAll] = useState(false)

  function checkUncompleted(task) {
    return task.isCompleted === false
  }

  function checkCompleted(task) {
    return task.isCompleted === true
  }

  const findUncompleted = () => {
    if (taskData.find(checkUncompleted)) setIsCompletedAll(false)
    else setIsCompletedAll(true)
  }

  function filterTaskData(data, keyword) {
    if (keyword === 'ALL') {
      return data
    }
    if (keyword === 'COMPLETED') {
      return data.filter(checkCompleted)
    }
    if (keyword === 'ACTIVE') {
      return data.filter(checkUncompleted)
    }
    return data
  }

  async function fetchData() {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}`)
      setTaskData(sortArray(response.data, {
        by: 'createdAt',
        order: 'desc'
      }))
      const activeTasks = response.data.filter(checkUncompleted)
      setActiveItems(activeTasks.length)
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchAndFilterData(keyword) {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}`)
      const filteredData = filterTaskData(response.data, keyword)
      setTaskData(sortArray(filteredData, {
        by: 'createdAt',
        order: 'desc'
      }))
    } catch (error) {
      console.log(error)
    }
  }

  async function postData(body) {
    try {
      await axios.post(`${process.env.REACT_APP_SERVER_URL}`, body)
      fetchData()
    } catch (err) {
      console.log(err);
    }
  }

  async function updateData(body) {
    try {
      await axios.put(`${process.env.REACT_APP_SERVER_URL}${body.id}`, body)
      fetchData()
    } catch (err) {
      console.log(err)
    }
  }

  // async function deleteData(id, isCleared) {
  //   if (!isCleared) {
  //     try {
  //       await axios.delete(`${process.env.REACT_APP_SERVER_URL}${id}`)
  //       fetchData()
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   else {
  //     taskData.forEach( async (task) => {
  //       if (task.isCompleted === true) {
  //         try {
  //           await axios.delete(`${process.env.REACT_APP_SERVER_URL}${task._id}`)
  //         } catch (error) {
  //           console.log(error)
  //         }
  //       }
  //     })
  //     fetchData()
  //   }
  // }

  useEffect(() => {
    fetchData()
    findUncompleted()
  }, [])

  return (
    <TaskContext.Provider value={
        {
          activeItems,
          taskData, 
          setTaskData,
          taskEditingId, 
          setTaskEditingId, 
          isCompletedAll, 
          setIsCompletedAll,
          postData, 
          updateData,
          fetchData,
          fetchAndFilterData,
          // deleteData,
        }
      }>
      {props.children}
    </TaskContext.Provider>
  );
};
