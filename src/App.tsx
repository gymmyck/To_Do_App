import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./AppStyles.js";
import { lightTheme, darkTheme } from "./themes.js";
import TodoProvider from "./context/todoContext";
import Home from "./pages/Home";
import AddTask from "./pages/AddPage";
import EditTask from "./pages/EditPage";
import DetailTask from "./pages/DetailsPage";

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
            <Route path="/seeTask" element={<DetailTask />}></Route>
          </Routes>
        </TodoProvider>
        Hi
      </ThemeProvider>
    </Router>
  );
}

export default App;
