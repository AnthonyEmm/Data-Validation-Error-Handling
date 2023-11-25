import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tasks from "./components/Tasks";
import CreateTasks from "./components/CreateTasks";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/tasks/create" element={<CreateTasks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
