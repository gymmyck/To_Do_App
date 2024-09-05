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
            <Route path="/editTask" element={<EditTask />}></Route>
            <Route path="/taskDetail" element={<DetailTask />}></Route>
          </Routes>
        </TodoProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
