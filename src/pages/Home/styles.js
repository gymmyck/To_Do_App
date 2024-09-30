import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const MainContainer = styled.div`
margin:0;
width: 50vw;
min-height: 100vh;
border: 1px solid red;
display: flex;
flex-direction: column;
justify-content: start;
align-items:center;
`;

export const InputContainer = styled.div`
width: 398px;
height: 60px;
// border: 1px solid red;
display: flex;
justify-content: center;
align-items: center;
position: relative;
margin-top:40px;
`;


export const InputButton = styled.button`
width: 36px;
height: 36px;
display:flex;
justify-content: center;
align-items: center;
border-radius:50%;
border: none;
position:absolute;
right: 14px;
background-color: #0D99FF1A;

&:hover {
    background-color: ${(props) => props.theme.hoverSecondary};
  }
`;

export const AddButton = styled.button`
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
margin-top: 20px;
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
margin-top: 20px;
margin-bottom: 20px;
font-size:18px;
color: #FFFFFF;

&:hover {
    background-color: ${(props) => props.theme.hoverSecondary};
  }
`;

export const PowerModeButton = styled.button`
width: 208px;
height: 60px;
display:flex;
justify-content: space-around;
align-items: center;
border-radius:60px;
border: none;
padding-inline: 12px;
right: 14px;
background-color: #0D99FF;
margin-top: 20px;
font-size:18px;
color: #FFFFFF;

&:hover {
    background-color: ${(props) => props.theme.hoverSecondary};
  }
`;

export const FiltersContainer = styled.div`
width: 398px;
height: 60px;
// border: 1px solid green;
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
margin-top:10px;
`;

export const ButtonWrapper = styled.div`
width: 184px;
height: 44px;
// border: 1px solid orange;
display: flex;
justify-content: center;
align-items: start;
position: relative;
`;

export const FilterButton = styled.button`
width: 100%;
height: 100%;
display:flex;
justify-content: space-around;
align-items: center;
padding: 0 30px;
border-radius:60px;
border: none;
position:absolute;
background-color: #FFFFFF;

&:hover {
    background-color: ${(props) => props.theme.hoverSecondary};
  }
`;

export const ToDosContainer = styled.div`
width:400px;
min-height:100px;
// border: 1px solid red;
display: flex;
flex-direction:column;
justify-content: center;
align-items:center;
`;

// const tagsList  = todos.flatMap((todo) => todo.tagsArray)