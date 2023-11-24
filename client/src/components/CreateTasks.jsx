import React from "react";
import TasksForm from "./TaskForm";

const CreateTasks = ({ CreateTasks }) => {
  return (
    <div className="create">
      <h1>Create New Task</h1>
      <TasksForm />
    </div>
  );
};

export default CreateTasks;
