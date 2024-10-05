import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none !important;
  }

  body {
    margin: 0;
    background:${(props) => props.theme.main};
    // overflow: hidden;
    display: flex;
    justify-content: center;
  }

  .main {
    height: 1200px;
    width: 1000px;
  }

  form{
  width:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  }

  body::-webkit-scrollbar {
    width: 8px;
  }

  body::-webkit-scrollbar-track {
    background: #eef0f2;
    border-radius: 20px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: #454955;
    border-radius: 20px;
  }
`;

export default GlobalStyle;