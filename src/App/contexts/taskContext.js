import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import sortArray from 'sort-array'

export const TaskContext = createContext();

export const TaskProvider = (props) => {
  const [ data, setData ] = useState([]);
  async function fetchData() {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}`)
      setData(sortArray(response.data, {
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
  useEffect(() => {
    fetchData()
  })
  return (
    <TaskContext.Provider value={{ data, setData, postData }}>
      {props.children}
    </TaskContext.Provider>
  );
};
