import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const MainContainer = styled.div`
margin:0;
width: 100vw;
height: 800px;
border: 1px solid red;
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
`;

export const InputContainer = styled.div `
width: 398px;
height: 60px;
border: 1px solid red;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`;

export const InputButton = styled.button`
width: 36px;
height: 36px;
display:flex;
border-radius:50%;
border: none;
position:absolute;
right: 14px;
background-color: #0D99FF1A;

&:hover {
    background-color: ${(props) => props.theme.hoverSecondary};
  }
`;