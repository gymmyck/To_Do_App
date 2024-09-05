import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendarDays,
    faArrowUp,
    faArrowsUpDownLeftRight,
    faPen,
    faCopy,
    faTrash,
    faCheck
} from "@fortawesome/free-solid-svg-icons";
import { MainContainer, TaskBullet, TaskTitleLine, TaskInfoLine, TaskTitle, ToDoLeft, ToDoRight, TaskInfo, DueDate, TaskData, TaskTag, TaskButtons } from "./styles";
import ProgressCircle from "../ProgressCircle";
import styled from "styled-components";

type TaskEditButtonProps = {
    deleteButton?: boolean;
}

const TaskEditButton = styled.button<TaskEditButtonProps>`
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

const ToDo = () => {
    return (
        <MainContainer>
            <ToDoLeft>
                <TaskTitleLine>
                    <TaskBullet style={{ marginLeft: '1px' }} />
                    <TaskTitle> Prepare for job interview</TaskTitle>
                </TaskTitleLine>
                <TaskInfoLine>
                    <FontAwesomeIcon icon={faCalendarDays} style={{ fontSize: '20px', paddingLeft: '2px' }} />
                    <TaskInfo style={{ paddingLeft: '11px' }}>Due Date:</TaskInfo>
                    <DueDate style={{ paddingLeft: '8px' }}>Sep 30</DueDate>
                </TaskInfoLine>
                <TaskInfoLine>
                    <FontAwesomeIcon icon={faArrowUp} style={{ fontSize: '20px', paddingLeft: '3px' }} />
                    <TaskInfo style={{ paddingLeft: '13px' }}>Priority:</TaskInfo>
                    <TaskData style={{ paddingLeft: '8px' }}>Medium (5/10)</TaskData>
                </TaskInfoLine>
                <TaskInfoLine>
                    <FontAwesomeIcon icon={faArrowsUpDownLeftRight} style={{ fontSize: '20px' }} />
                    <TaskInfo>Complexity:</TaskInfo>
                    <TaskData style={{ paddingLeft: '8px' }}>High (8/10)</TaskData>
                </TaskInfoLine>
                <TaskTag>
                    Job Interview
                </TaskTag>
            </ToDoLeft>
            <ToDoRight>
                <TaskButtons>
                    <Link to='/editTask'>
                        <TaskEditButton>
                            <FontAwesomeIcon icon={faPen} style={{ fontSize: '14px' }} />
                        </TaskEditButton>
                    </Link >

                    <TaskEditButton>
                        <FontAwesomeIcon icon={faCheck} style={{ fontSize: '18px' }} />
                    </TaskEditButton>

                    <TaskEditButton>
                        <FontAwesomeIcon icon={faCopy} style={{ fontSize: '14px' }} />
                    </TaskEditButton>

                    <TaskEditButton deleteButton={true}>
                        <FontAwesomeIcon icon={faTrash} style={{ fontSize: '18px' }} />
                    </TaskEditButton>
                </TaskButtons>
                <ProgressCircle></ProgressCircle>
            </ToDoRight>
        </MainContainer>)
}

export default ToDo;