import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const MainContainer = styled.div`
width: 398px;
height: 200px;
// border: 1px solid red;
border-radius: 18px;
background-color:#FFFFFF;
display: flex;
justify-content: center;
align-items: center;
position: relative;
margin-top:80px;
padding:12px;
`;

export const ToDoLeft = styled.div`
height: 100%;
width:100%;
border: 1px solid green;
flex: 3;
display: flex;
`;

export const ToDoRight = styled.div`
height: 100%;
width:100%;
border: 1px solid green;
flex: 1;
display: flex;
`;

export const TaskBullet = styled.div`
width: 18px;
height: 18px;
border: 1px solid red;
border-radius: 50%;
background-color: #FF4034;

`;