import React, {useState} from "react";
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

  const [isLightTheme, setIsLightTheme] = useState(false);

  const handleSwitchTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return (
    <Router>
      <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}>
        <GlobalStyle />
        <div className="mq-padding-r-10">
            <label className="switch">
              <input type="checkbox" onClick={handleSwitchTheme} />
              <span className="slider round">
                <span>{isLightTheme ? "Dark Mode" : "Light Mode"}</span>
              </span>
            </label>
          </div>
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

// --v-- Add Subtasks
// --v-- Add Tags
// --v-- Add Tags to the list

// --v-- Remove Task
// --v-- Remove All Tasks

// --v-- Search Tasks

// --v-- Sort default (current Date)
// --v-- Date - Ascending
// --v-- Date - Descending
// --v-- Priority - Ascending
// --v-- Priority - Descending
// --v-- Complexity - Ascending
// --v-- Complexity - Descending

// --v-- make circular progress line 100% when task completed
// --v-- make straight progress line

// --v-- Toggle done/undone -> show full progress bar`

// --v-- Duplicate task

// --v-- Label Color depending on the due date (3 days - orange, 1 day - red)

// --v-- Add messages 'this should be completed'

// --v-- Add Modal 'you sure you wanna delete this task?'

// --v-- update the bullet point color in the details page as well

// --v-- write 'overdue, today, tomorrow, been completed' at the Due Date

// --v-- add light/dark themes - look for all the properties containing 'color' in every file and change it to props.

// --v-- Power Mode On


// Add motion animations