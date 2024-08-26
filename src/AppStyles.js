import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none !important;
  }

  body {
    margin: 0;
    display: flex;
    background:${(props) => props.theme.main};
    overflow: hidden;
    justify-content: center;
  }

  .main {
    height: 1200px;
    width: 1000px;
  }

  body::-webkit-scrollbar {
    width: 12px;
  }

  body::-webkit-scrollbar-track {
    background: green;
    border-radius: 20px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: red;
    border-radius: 20px;
  }
`;

export default GlobalStyle;