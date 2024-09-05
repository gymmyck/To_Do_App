import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const MainContainer = styled.div`
margin:0;
width: 44vw;
height: 90vh;
position:relative;
background-color: #0D99FF1A;
border: 1px solid red;
border-radius:12px;
border:none;
display: flex;
flex-direction: column;
justify-content: start;
align-items:center;
margin-top:50px;
`;

export const HeaderContainer = styled.div`
width:90%;
// border: 1px solid green;
display: flex;
justify-content: center;
align-items:center;
position:relative;
margin-top:60px;
margin-bottom:16px;
font-size:24px;
color: #FFFFFF;
`;

export const BackButton = styled.button`
width: 36px;
height: 36px;
display:flex;
position: absolute;
left:-10px;
top:-8px;
justify-content: center;
align-items: center;
border-radius:50%;
border: none;
right: 14px;
background-color: #0D99FF1A;

&:hover {
    background-color: ${(props) => props.theme.hoverSecondary};
  }
`;




export const ToDoContainer = styled.div`
width: 398px;
height: 234px;
// border: 1px solid red;
border-radius: 18px;
background-color:#FFFFFF;
display: flex;
justify-content: center;
align-items: center;
position: relative;
margin-top:20px;
padding:12px;
`;

export const ToDoLeft = styled.div`
height: 100%;
width:100%;
// border: 1px solid green;
flex: 3;
display: flex;
flex-direction:column;

&:last-child {
    align-items: center;
}
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

export const TaskProgress = styled.div`
width:98%;
height:0px;
// border: 1px solid red;
// background-color:#0D99FF;
border-radius:60px;
font-size:12px;
display: flex;
justify-content: center;
align-items: center;
margin-top:20px;
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

export const TaskEditButton = styled.button`
width: 32px;
height: 32px;
display:flex;
justify-content: center;
align-items: center;
border: none;
border-radius: 50%;
background-color:${(props) => props.deleteButton ? '#f67e7d' : '#0D99FF1A'};
color: #717171;
margin-bottom:8px;

&:hover {
    background-color:#0D99FF9A;
    color: #717171;
}
`;


export const FormSection = styled.div `
width: 60%;
// height: 100px;
// border: 1px solid blue;
padding-top:8px;
`;

export const SectionTitle = styled.div `
width: 100%;
// border: 1px solid blue;

padding-bottom:6px;
color: #FFFFFF;
`;

export const SectionContent = styled.div `
width: 100%;
// border: 1px solid blue;
display:flex;
justify-content:${(props) => props.justifyType === 'date' ? 'start' : props.justifyType === 'time' ? 'end' : 'center'};
padding-bottom:6px;
`;



export const RepeatButton = styled.button`
width: 192px;
height: 60px;
display:flex;
justify-content: space-around;
align-items: center;
border-radius:60px;
border: none;
padding-inline: 12px;
right: 14px;
background-color: #0D99FF;
margin-top: 40px;
font-size:18px;
color: #FFFFFF;

&:hover {
    background-color: ${(props) => props.theme.hoverSecondary};
  }
`;

export const DeleteAllButton = styled.button`
width: 192px;
height: 60px;
display:flex;
justify-content: space-around;
align-items: center;
border-radius:60px;
border: none;
padding-inline: 12px;
right: 14px;
background-color: #f67e7d;
margin-top: 40px;
font-size:18px;
color: #FFFFFF;

&:hover {
    background-color: ${(props) => props.theme.hoverSecondary};
  }
`;

