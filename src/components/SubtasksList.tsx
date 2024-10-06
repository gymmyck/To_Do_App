import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck,
    faX
} from "@fortawesome/free-solid-svg-icons";
import { percentageCalculator } from '../utils';

const SubtaskContainer = styled.div<{ isCompleted?: boolean }>`
width: 100%;
height: 40px;
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
color: ${(props)=> props.theme.textSecondary};
margin-top:4px;
margin-bottom:4px;
text-decoration: ${(props) => props.isCompleted ? 'line-through' : null};
background-color:${(props) => props.theme.bgSubtask};

&::placeholder {
  font-size: 16px;
  font-weight: 100;
  color: ${(props) => props.theme.inputSecondary};
}

&:hover {
  border-color: transparent;
  outline: none;
  background-color:${(props) => props.theme.bgSubtaskHover};
}

&:focus {
  border: none;
  outline: none;
}
`;

const SubtaskButton = styled.button<{ isCompleted?: boolean }>`
width: 28px;
height: 28px;
display:flex;
justify-content: center;
align-items: center;
border: none;
border-radius: 50%;
background-color: ${(props) => props.isCompleted ? '#0D99FF9A' : '#b24029'};
color: #717171;
margin-bottom:8px;
position: absolute;
right:10px;
top: 6px;

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

const SubtaskList = ({ detailsPage, subtasks, completeSubtask, removeSubtask, todoId, todo, updateTodoCompleteness }: { subtasks: Subtask[], completeSubtask?: any, removeSubtask?: any, detailsPage: boolean, todoId: any, todo:any, updateTodoCompleteness:any }) => {


    return (
        <>
            {subtasks && subtasks.map((item, index) => (
                <SubtaskContainer isCompleted={item.isCompleted} key={item.id}>
                    {`${index + 1}. ${item.name}`}
                    {detailsPage ?
                        <SubtaskButton isCompleted={item.isCompleted} onClick={() => {completeSubtask(todoId, item.id); percentageCalculator(todo); updateTodoCompleteness(todo)}}>
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