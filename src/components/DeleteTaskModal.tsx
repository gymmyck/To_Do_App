import React from "react";
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
top:33vh;
z-index:100;
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
`;




type ToDoProps = {
    todo: any;
}

const DeleteTaskModal = ({ todo }: ToDoProps) => {

    return (
        <MainContainer>
            You sure you want to delete this task?
            <ModalButtonsContainer>
                <ModalButton>No</ModalButton>
                <ModalButton>Yes</ModalButton>
            </ModalButtonsContainer>

        </MainContainer>)
}

export default DeleteTaskModal;