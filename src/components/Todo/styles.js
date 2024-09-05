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
// border: 1px solid green;
flex: 3;
display: flex;
flex-direction:column;
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

export const TaskBullet = styled.div`
width: 18px;
height: 18px;
border: 1px solid red;
border-radius: 50%;
background-color: #FF4034;
display:inline-block;
`;

export const TaskTitle = styled.p`
color: #000000;
font-weight:600;
font-size: 18px;
margin: 0px;
padding-left:10px;
`;

export const TaskInfo = styled.p`
color: #616161;
font-size: 16px;
margin: 0px;
padding-left:10px;
`;

export const DueDate=styled.p`
color: blue;
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
background-color:#FFF6E8;
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
padding-bottom:104px;
padding-left:16px;
`;

