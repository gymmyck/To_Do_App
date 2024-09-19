import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./AppStyles.js";
import { lightTheme, darkTheme } from "./themes.js";
import TodoProvider from "./context/todoContext";
import Home from "./pages/Home";
import AddTask from "./pages/AddTaskPage";
import EditTask from "./pages/EditTaskPage";
import DetailTask from "./pages/DetailsTaskPage";
import "./styles.css";


function App() {
  return (
    <Router>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <TodoProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/newTask" element={<AddTask />}></Route>
            <Route path="/editTask/:id" element={<EditTask />}></Route>
            <Route path="/taskDetail/:id" element={<DetailTask />}></Route>
          </Routes>
        </TodoProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;


// --v-- Local Storage
// --v-- change the task background color when task completed
// make circular bar 100% when task completed

// --v-- Add Subtasks
// --v-- Add Tags
// --v-- Add Tags to the list

// --v-- Remove Task
// --v-- Remove All Tasks

// Label Color depending on the due date (3 days - orange, 1 day - red)

// Toggle done/undone -> show full progress bar

// --v-- Search Tasks

// Sort default (current Date)
// Date - Ascending
// Date - Descending
// Priority - Ascending
// Priority - Descending
// Complexity - Ascending
// Complexity - Descending

// Duplicate task

// Power Mode On

// Add Modals

// Add messages 'this should be completed'