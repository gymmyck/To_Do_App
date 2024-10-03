import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const ToDoLeft = styled.div`
height: 100%;
width:100%;
// border: 1px solid green;
flex: 3;
display: flex;
flex-direction:column;
align-items:start;
justify-content:start;
`;

export const ToDoRight = styled.div`
// height: 100%;
width:100%;
// border: 1px solid green;
flex: 1;
display: flex;
`;

export const TaskTitleLine = styled.div`
width: 100%;
height: 22px;
// border: 1px solid blue;
display:flex;
padding-top:10px;
padding-bottom:18px;
`;

export const TaskInfoLine = styled.div`
width: 100%;
height: 22px;
// border: 1px solid blue;
display: flex;
justify-content:start;
padding-top:8px;
padding-bottom:6px;
`;

export const TagsSection = styled.div `
min-width: 60%;
min-height: 20px;
// border: 1px solid yellow;
padding-top:0px;
display:flex;
flex-wrap:wrap;
justify-content:start;
align-items: center;
`;

export const TaskInfo = styled.p`
color: #616161;
font-size: 16px;
margin: 0px;
padding-left:10px;
`;



export const TaskData = styled.p`
color: black;
margin: 0px;
padding-left:10px;
`;

export const TaskTag = styled.div`
width:93px;
height:27px;
// border: 1px solid red;
background-color: #FFF6E8;
border-radius:60px;
font-size:12px;
display: flex;
justify-content: center;
align-items: center;
margin-top:12px;
`;

export const TaskButtons = styled.div`
max-width: 100%;
// height: auto;
// border: 1px solid red;
display: flex;
flex-wrap:wrap;
gap:1px;
justify-content: space-around;
padding-bottom:84px;
padding-left:16px;
`;

