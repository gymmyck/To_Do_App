import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const MainContainer = styled.div`
width: 398px;
min-height: 200px;
border: 1px solid #E8E8E8;
border-radius: 18px;
background-color:white;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
position: fixed;
top:45%;
left:50%;
z-index:100;
transform: translate(-50%, -50%)
`;

const ModalButtonsContainer = styled.div`
margin-top:40px;
width:200px;
display:flex;
justify-content:space-between;
`;

const ModalButtonNo = styled.button`
width:80px;
height:40px;
background-color:#efe6dd22;
border: 1px solid #efe6dd;
border-radius:30px;

&:hover {
    background-color:#efe6dd;
  }
`;
const ModalButtonYes = styled.button`
width:80px;
height:40px;
background-color:${(props) => props.theme.bgDeleteButtonHover};
border: 1px solid ${(props) => props.theme.bgDeleteButton};
border-radius:30px;

&:hover {
    background-color: ${(props) => props.theme.bgDeleteButton};
  }
`;

type ToDoProps = {
    todoToDelete: any;
    removeTodo: any;
    closeModal: any;
}

const DeleteTaskModal = ({ todoToDelete, removeTodo, closeModal }: ToDoProps) => {
    const navigate = useNavigate();

    return (
        <MainContainer>
            You sure you want to delete this task?
            <ModalButtonsContainer>
                <ModalButtonNo onClick={() => closeModal()}>No</ModalButtonNo>
                <ModalButtonYes onClick={() => { removeTodo && removeTodo(todoToDelete); closeModal(); navigate('/') }}>Yes</ModalButtonYes>
            </ModalButtonsContainer>

        </MainContainer>)
}

export default DeleteTaskModal;