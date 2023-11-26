import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TasksForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
  });
  // console.log(errors);

  const notify = () => {
    toast.success("New Task Added!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const onSubmit = (data) => {
    axios.post("http://localhost:3020/task/create", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">Task Title</label>
      <input
        {...register("title", { required: true, minLength: 4 })}
        type="text"
        placeholder="Example Task 1"
        required
      />
      <br />
      <label htmlFor="description">Description</label>
      <input
        {...register("description", { required: true, minLength: 4 })}
        type="text"
        placeholder="Description"
        required
      />
      <br />
      <label htmlFor="priority">Priority</label>
      <select
        {...register("priority", { required: true })}
        required
        id="priority"
      >
        <option value=""></option>
        <option value="high">High</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
      </select>
      <br />
      <label htmlFor="status">Status</label>
      <select {...register("status", { required: true })} required id="status">
        <option value=""></option>
        <option value="in progress">In Progress</option>
        <option value="open">Open</option>
        <option value="resolved">Resolved</option>
      </select>
      <br />
      <button onClick={notify}>Submit</button>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </form>
  );
};

export default TasksForm;
