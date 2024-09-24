import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck,
    faX
} from "@fortawesome/free-solid-svg-icons";

const SubtaskContainer = styled.div<{ isCompleted?: boolean }>`
width: 100%;
height: 60px;
border-radius: 60px;
border: 1px solid #e2e2e2;
// border: none;
outline: none;
text-indent: 42px;
position: relative;
font-size: 16px;
display:flex;
justify-content:start;
align-items:center;
color: #FFFFFF;
margin-top:4px;
margin-bottom:4px;
text-decoration: ${(props) => props.isCompleted ? 'line-through' : null};

&::placeholder {
  font-size: 16px;
  font-weight: 100;
  color: ${(props) => props.theme.inputSecondary};
}

&:hover {
  border-color: transparent;
  outline: none;
  background-color: #ede0d422;
}

&:focus {
  border: none;
  outline: none;
}
`;

const SubtaskButton = styled.button<{ isCompleted?: boolean }>`
width: 32px;
height: 32px;
display:flex;
justify-content: center;
align-items: center;
border: none;
border-radius: 50%;
background-color: ${(props) => props.isCompleted ? '#0D99FF9A' : '#b24029'};
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

type Subtask = {
    id: string,
    name: string,
    isCompleted: boolean,
}

const SubtaskList = ({ detailsPage, subtasks, completeSubtask, removeSubtask, todoId }: { subtasks: Subtask[], completeSubtask?: any, removeSubtask?: any, detailsPage: boolean, todoId: any }) => {


    return (
        <>
            {subtasks && subtasks.map((item, index) => (
                <SubtaskContainer isCompleted={item.isCompleted} key={item.id}>
                    {`${index + 1}. ${item.name}`}
                    {detailsPage ?
                        <SubtaskButton isCompleted={item.isCompleted} onClick={() => completeSubtask(todoId, item.id)}>
                            <FontAwesomeIcon icon={faCheck} style={{ color: '#FFFFFF' }} />
                        </SubtaskButton> :
                        <SubtaskButton onClick={() => removeSubtask(item.id)}>
                            <FontAwesomeIcon icon={faX} style={{ color: '#FFFFFF' }} />
                        </SubtaskButton>

                    }
                </SubtaskContainer>))}
        </>
    )
}

export default SubtaskList;