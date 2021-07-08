import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import sortArray from 'sort-array';

export const TaskContext = createContext();

export const TaskProvider = (props) => {
  const [taskData, setTaskData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [taskEditingId, setTaskEditingId] = useState('');
  const [isCompletedAll, setIsCompletedAll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState('ALL');
  const SERVER_URL = 'https://kobiton-gs-todo-app-srv.herokuapp.com/';

  function checkUncompleted(task) {
    return task.isCompleted === false;
  }

  const findUncompleted = () => {
    if (taskData.find(checkUncompleted)) setIsCompletedAll(false);
    else setIsCompletedAll(true);
  };

  // control loading screen
  function triggerLoading() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 900);
  }

  // Filter data method
  const getAll = () => {
    // get all tasks
    setFilteredData(taskData);
    setActiveFilter('ALL');
  };

  const getActive = () => {
    // get all active tasks
    const activeTasks = taskData.filter((task) => task.isCompleted === false);
    setFilteredData(activeTasks);
    setActiveFilter('ACTIVE');
  };

  const getCompleted = () => {
    // get all completed tasks
    const completedTasks = taskData.filter((task) => task.isCompleted === true);
    setFilteredData(completedTasks);
    setActiveFilter('COMPLETED');
  };

  // Call API method
  async function fetchData() {
    try {
      const response = await axios.get(`${SERVER_URL}`);
      triggerLoading();
      const sortedData = sortArray(response.data, {
        by: 'createdAt',
        order: 'desc',
      });
      setTaskData(sortedData);
      if (activeFilter === 'ALL') {
        setFilteredData(sortedData);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function postData(body) {
    try {
      await axios.post(`${SERVER_URL}`, body);
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }

  async function updateData(body) {
    try {
      await axios.put(`${SERVER_URL}${body.id}`, body);
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
      await axios.delete(`${SERVER_URL}${taskId}`, {
        params,
      });
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }

  // modify data
  const toggleAllTasks = () => {
    if (taskData.find(checkUncompleted)) {
      taskData.forEach((task) => {
        updateData({
          id: task._id,
          isCompleted: true,
        });
      });
    } else {
      taskData.forEach((task) => {
        updateData({
          id: task._id,
          isCompleted: false,
        });
      });
    }
  };

  useEffect(() => {
    findUncompleted();
  }, [taskData]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <TaskContext.Provider
      value={{
        isLoading,
        toggleAllTasks,
        filteredData,
        setFilteredData,
        taskData,
        setTaskData,
        taskEditingId,
        setTaskEditingId,
        isCompletedAll,
        setIsCompletedAll,
        checkUncompleted,
        getAll,
        getActive,
        getCompleted,
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
