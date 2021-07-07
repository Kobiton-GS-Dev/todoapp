import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import sortArray from 'sort-array';

export const TaskContext = createContext();

export const TaskProvider = (props) => {
  const [taskData, setTaskData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [taskEditingId, setTaskEditingId] = useState('');
  const [isCompletedAll, setIsCompletedAll] = useState(false);

  function checkUncompleted(task) {
    return task.isCompleted === false;
  }

  const findUncompleted = () => {
    if (taskData.find(checkUncompleted)) setIsCompletedAll(false);
    else setIsCompletedAll(true);
  };

  async function fetchData() {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}`);
      setTaskData(
        sortArray(response.data, {
          by: 'createdAt',
          order: 'desc',
        }),
      );
    } catch (error) {
      console.log(error);
    }
  }

  async function postData(body) {
    try {
      await axios.post(`${process.env.REACT_APP_SERVER_URL}`, body);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }

  async function updateData(body) {
    try {
      await axios.put(`${process.env.REACT_APP_SERVER_URL}${body.id}`, body);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteData(taskId) {
    try {
      const params = {
        id: taskId,
      };
      await axios.delete(`${process.env.REACT_APP_SERVER_URL}${taskId}`, {
        params,
      });
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData();
    findUncompleted();
    console.log(process.env.REACT_APP_SERVER_URL);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        filteredData,
        setFilteredData,
        taskData,
        setTaskData,
        taskEditingId,
        setTaskEditingId,
        isCompletedAll,
        setIsCompletedAll,
        checkUncompleted,
        postData,
        updateData,
        fetchData,
        deleteData,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
