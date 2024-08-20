import React from "react";
import "./styles.css";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./AppStyles.js";

const lightTheme = {
  main: "#ffffff",
  secondary: "#1c2940",
  textMain: "#0D084D",
  textSecondary: "#ffffff",
  borderMain: "#00261e",
  borderSecondary: "#E8E8E8",
  navTextMain: "#050f32",
  navTextSecondary: "#E8E8E8",
  navBackgroundMain: "#00261e",
  navBackgroundSecondary: "#ebf5ee",
  hoverMain: "#101418",
  hoverSecondary: "#FCFCFC",
  inputMain: "#1c2940",
  inputSecondary: "#F6F6F6",
  logoColour1: "#484F6D",
  logoColour2: "#050F32",
};
const darkTheme = {
  secondary: "#ffffff",
  main: "#1c2940",
  textSecondary: "#0D084D",
  textMain: "#ffffff",
  borderSecondary: "#101418",
  borderMain: "#E8E8E8",
  navTextSecondary: "#050f32",
  navTextMain: "#E8E8E8",
  navBackgroundSecondary: "#00261e",
  navBackgroundMain: "#ebf5ee",
  hoverSecondary: "#101418",
  hoverMain: "#FCFCFC",
  inputSecondary: "#050f32cc",
  inputMain: "#F6F6F6",
  logoColour1: "#e6e6e9",
  logoColour2: "#9999a1",
};

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
