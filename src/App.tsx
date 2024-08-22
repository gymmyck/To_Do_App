import React from "react";
import "./styles.css";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./AppStyles.js";
import {lightTheme, darkTheme} from './themes.js'


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <GlobalStyle />
        Hi
      </div>
    </ThemeProvider>
  );
}

export default App;
