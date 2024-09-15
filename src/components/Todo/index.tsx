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
import { TaskBullet, TaskTitleLine, TaskInfoLine, ToDoLeft, ToDoRight, TaskInfo, DueDate, TaskData, TaskTag, TaskButtons } from "./styles";
import ProgressCircle from "../ProgressCircle";
import styled from "styled-components";
import { levelDescription } from "../../utils";
import { useTodo } from "../../context/todoContext";

type MainContainerProps = {
    completed: boolean;
}

const MainContainer = styled.div<MainContainerProps>`
width: 398px;
height: 200px;
// border: 1px solid red;
border-radius: 18px;
background-color:${(props) => props.completed ? `#DCFCE7` : `#FFFFFF`};
display: flex;
justify-content: center;
align-items: center;
position: relative;
margin-top:20px;
padding:12px;
`;

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

type TaskTitleProps = {
    completed: boolean;
}

const TaskTitle = styled.p<TaskTitleProps>`
color: #000000;
font-weight:600;
font-size: 18px;
margin: 0px;
padding-left:10px;
text-decoration:${(props) => props.completed ? `line-through` : `none`};
`;

type ToDoProps = {
    todo: any;
}

const ToDo = ({ todo }: ToDoProps) => {

    const { completeTodo, removeTodo } = useTodo() ?? {};

    return (
        <MainContainer completed={todo.isCompleted}>
            <ToDoLeft>
                <TaskTitleLine>
                    <TaskBullet style={{ marginLeft: '1px' }} />
                    <Link to={`/taskDetail/${todo.id}`}>
                        <TaskTitle completed={todo.isCompleted}>{todo.name}</TaskTitle>
                    </Link>
                </TaskTitleLine>
                <TaskInfoLine>
                    <FontAwesomeIcon icon={faCalendarDays} style={{ fontSize: '20px', paddingLeft: '2px' }} />
                    <TaskInfo style={{ paddingLeft: '11px' }}>Due Date:</TaskInfo>
                    <DueDate style={{ paddingLeft: '8px' }}>{`${todo.dueDate} ${todo.dueTime}`}</DueDate>
                </TaskInfoLine>
                <TaskInfoLine>
                    <FontAwesomeIcon icon={faArrowUp} style={{ fontSize: '20px', paddingLeft: '3px' }} />
                    <TaskInfo style={{ paddingLeft: '13px' }}>Priority:</TaskInfo>
                    <TaskData style={{ paddingLeft: '8px' }}>{levelDescription(todo.priority)}</TaskData>
                </TaskInfoLine>
                <TaskInfoLine>
                    <FontAwesomeIcon icon={faArrowsUpDownLeftRight} style={{ fontSize: '20px' }} />
                    <TaskInfo>Complexity:</TaskInfo>
                    <TaskData style={{ paddingLeft: '8px' }}>{levelDescription(todo.complexity)}</TaskData>
                </TaskInfoLine>
                <TaskTag>
                    Job Interview
                </TaskTag>
            </ToDoLeft>
            <ToDoRight>
                <TaskButtons>
                    <Link to={`/editTask/${todo.id}`}>
                        <TaskEditButton>
                            <FontAwesomeIcon icon={faPen} style={{ fontSize: '14px' }} />
                        </TaskEditButton>
                    </Link >

                    <TaskEditButton onClick={() => completeTodo && completeTodo(todo)}>
                        <FontAwesomeIcon icon={faCheck} style={{ fontSize: '18px' }} />
                    </TaskEditButton>

                    <TaskEditButton>
                        <FontAwesomeIcon icon={faCopy} style={{ fontSize: '14px' }} />
                    </TaskEditButton>

                    <TaskEditButton deleteButton={true} onClick={() => removeTodo && removeTodo(todo)}>
                        <FontAwesomeIcon icon={faTrash} style={{ fontSize: '18px' }} />
                    </TaskEditButton>
                </TaskButtons>
                <ProgressCircle></ProgressCircle>
            </ToDoRight>
        </MainContainer>)
}

export default ToDo;