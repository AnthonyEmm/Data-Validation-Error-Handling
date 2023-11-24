import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Tasks = ({ Tasks }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3020/task")
      .then((response) => {
        console.log(response);
        setTasks(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="Task-container">
      <div>
        <h1>My Tasks</h1>
      </div>
      {tasks.map((task) => {
        return (
          <div key={task.id}>
            <h2>{task.title}</h2>
            <h4>{task.description}</h4>
            <h4>{task.priority}</h4>
            <h4>{task.status}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Tasks;
