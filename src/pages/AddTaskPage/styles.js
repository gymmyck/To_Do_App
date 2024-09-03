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
margin-top: 40px;
font-size:18px;
color: #FFFFFF;

&:hover {
    background-color: ${(props) => props.theme.hoverSecondary};
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
height: 100px;
// border: 1px solid blue;
padding-top:16px;
`;

export const SectionTitle = styled.div `
width: 100%;
// border: 1px solid blue;

padding-bottom:12px;
color: #FFFFFF;
`;

export const SectionContent = styled.div `
width: 100%;
// border: 1px solid blue;
display:flex;
justify-content:center;
`;