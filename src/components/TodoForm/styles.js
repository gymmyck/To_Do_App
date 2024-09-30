import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const MainContainer = styled.div`
margin:0;
width: 44vw;
min-height: 90vh;
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

export const SaveTaskButton = styled.button`
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
margin-top: 10px;
margin-bottom: 10px;
font-size:18px;
color: #FFFFFF;

&:hover {
    background-color: ${(props) => props.theme.hoverSecondary};
  }
`;

export const AddSubtaskButton = styled.button`
width: 32px;
height: 32px;
display:flex;
justify-content: center;
align-items: center;
border: none;
border-radius: 50%;
background-color:#32d0f9;
color: #717171;
margin-bottom:8px;
position: absolute;
right:16px;
top: 15px;

&:hover {
    background-color:#0D99FF9A;
    color: #717171;
}
`;

export const HeaderContainer = styled.div`
width:90%;
// border: 1px solid green;
display: flex;
justify-content: center;
align-items:center;
position:relative;
margin-top:60px;
margin-bottom:36px;
font-size:24px;
color: #FFFFFF;
`;

export const FormSection = styled.div `
width: 60%;
// height: 100px;
// border: 1px solid blue;
padding-top:8px;
`;

export const TagsSection = styled.div `
width: 60%;
min-height: 20px;
// border: 1px solid yellow;
padding-top:0px;
display:flex;
flex-wrap:wrap;
justify-content:start;
align-items: center;
`;

export const TimeSection = styled.div `
width: 60%;
// height: 100px;
// border: 1px solid blue;
padding-top:8px;
display:flex;
justify-content:space-between;
`;

export const TimeSubSection = styled.div `
width: 60%;
// height: 100px;
// border: 1px solid blue;
padding-top:8px;
display:flex;
flex-direction:column;
justify-content:center;
`;

export const SectionTitle = styled.div `
width: 100%;
// border: 1px solid blue;
position: relative;
padding-bottom:6px;
color: #FFFFFF;
`;

export const SectionContent = styled.div `
width: 100%;
// border: 1px solid blue;
display:flex;
justify-content:${(props) => props.justifyType === 'date' ? 'start' : props.justifyType === 'time' ? 'end' : 'center'};
padding-bottom:6px;
position:relative;
`;

export const ErrorDiv = styled.div `
// height: 16px;
width:60%;
display:flex;
color:red;
justify-content:start;
align-items:start;
// border: 1px solid yellow;
`;

export const ErrorMessage = styled.div `
// height: 16px;
// width:100%;
color:red;
// border: 1px solid yellow;
`;