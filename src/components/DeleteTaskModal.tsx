import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { useTodo } from "../context/todoContext";

type MainContainerProps = {
    completed: boolean;
}

const MainContainer = styled.div`
width: 398px;
min-height: 200px;
border: 1px solid red;
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

const ModalButton = styled.button`
width:80px;
height:40px;
border: 1px solid blue;
border-radius:30px;

&:hover {
    background-color: ${(props) => props.theme.hoverMain};
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
                <ModalButton onClick={() => closeModal()}>No</ModalButton>
                <ModalButton onClick={() => { removeTodo && removeTodo(todoToDelete); closeModal(); navigate('/') }}>Yes</ModalButton>
            </ModalButtonsContainer>

        </MainContainer>)
}

export default DeleteTaskModal;