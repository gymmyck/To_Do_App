import React, { useState } from "react";
import {motion} from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';
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
import { TaskTitleLine, TaskInfoLine, ToDoLeft, ToDoRight, TaskInfo, TaskData, TaskTag, TaskButtons, TagsSection } from "./styles";
import ProgressCircle from "../ProgressCircle";
import styled from "styled-components";
import { levelDescription, percentageCalculator, completeAllSubtasks, calculateDueDays, setDueDaysColor, updateTodoCompleteness } from "../../utils";
import { useTodo } from "../../context/todoContext";
import TagsList from "../TagsList";

type MainContainerProps = {
    completed: boolean;
    dueDays:number;
}

const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `${r}, ${g}, ${b}, ${alpha}`;
};

const MainContainer = styled.div<MainContainerProps>`
width: 398px;
min-height: 200px;
border: 1px solid ${(props) => props.theme.borderColor};
border-radius: 18px;
background-color:${(props) => props.completed ? `#DCFCE7` : props.dueDays < 0 ? `#bfb49fb1` : props.theme.taskBackgroundColor};
display: flex;
justify-content: center;
align-items: center;
position: relative;
margin-top:12px;
padding:10px;

&:hover {
    background-color: ${(props) => {
        const taskColor = props.completed ? `#DCFCE7` : props.dueDays < 0 ? `#bfb49fb1` : props.theme.taskBackgroundColor;
        return `rgba(${hexToRgba(taskColor, 0.85)})`;  // Slightly reduced opacity (0.9)
    }};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
}
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
background-color:${(props) => props.deleteButton ? '#f67e7d' : (props)=>props.theme.buttonColor};
color: ${(props)=>props.theme.buttonIcon};
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

const TaskBullet = styled.div<{ dueDaysColor: string }>`
width: 20px;
height: 20px;
// border: 1px solid red;
border-radius: 50%;
background-color: ${(props) => props.dueDaysColor};
display:inline-block;
`;

const DueDate=styled.p<{ dueDaysColor: string }>`
color: ${(props) => props.dueDaysColor};
margin: 0px;
padding-left:10px;
`;

type ToDoProps = {
    todo: any;
    openModal: any;
}

const ToDo = ({ todo, openModal }: ToDoProps) => {
    const navigate = useNavigate();
    const { completeTodo, removeTodo, duplicateTodo } = useTodo() ?? {};
    const [dateDescription, setDateDescription] = useState('');

    const dueDays = calculateDueDays(todo.dueDate);
    // console.log(todo.dueDate);

    const dueDaysColor = setDueDaysColor(todo.isCompleted, dueDays);

    const getDateDescription = (todo:any, dueDays: any) => {
        // console.log(todo.dueTime);
        if (dueDays === 2) {
            return 'Tomorrow';
        } else if (dueDays === 0 || dueDays === 1 ) {
            return 'Today';
        } else if (dueDays < 0) {
            return 'Overdue';
        } else {
            return `${todo.dueDate} at ${todo.dueTime || 'n/a'}`;
        }
    };

    const handleCompleteTodo = () => {
        if (completeTodo) {
            completeTodo(todo);
            percentageCalculator(todo);
        }
    };

    const handleDuplicateTodo = () => {
        if (duplicateTodo) {
            duplicateTodo(todo)
            navigate('/');
        }
    };

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <MainContainer completed={todo.isCompleted} dueDays={dueDays}>
            <ToDoLeft>
                <TaskTitleLine>
                    <TaskBullet style={{ marginLeft: '1px' }} dueDaysColor={dueDaysColor} />
                    <Link to={`/taskDetail/${todo.id}`}>
                        <TaskTitle completed={todo.isCompleted}>{todo.name}</TaskTitle>
                    </Link>
                </TaskTitleLine>
                <TaskInfoLine>
                    <FontAwesomeIcon icon={faCalendarDays} style={{ fontSize: '20px', paddingLeft: '2px' }} />
                    <TaskInfo style={{ paddingLeft: '11px' }}>Due Date:</TaskInfo>
                    <DueDate style={{ paddingLeft: '8px' }} dueDaysColor={dueDaysColor}>{todo.isCompleted ? `Completed` : `${ getDateDescription(todo, dueDays)}`}</DueDate>
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
                <TagsSection>
                    {todo.tagsArray ? <TagsList tags={todo.tagsArray}></TagsList> : null}
                </TagsSection>

            </ToDoLeft>
            <ToDoRight>
                <TaskButtons>
                    <Link to={`/editTask/${todo.id}`}>
                        <TaskEditButton>
                            <FontAwesomeIcon icon={faPen} style={{ fontSize: '14px' }} />
                        </TaskEditButton>
                    </Link >

                    <TaskEditButton onClick={() => { completeTodo && completeTodo(todo); percentageCalculator(todo); completeAllSubtasks(todo); updateTodoCompleteness(todo) }}>
                        <FontAwesomeIcon icon={faCheck} style={{ fontSize: '18px' }} />
                    </TaskEditButton>

                    <TaskEditButton onClick={() => { duplicateTodo && duplicateTodo(todo); navigate('/') }}>
                        <FontAwesomeIcon icon={faCopy} style={{ fontSize: '14px' }} />
                    </TaskEditButton>

                    <TaskEditButton deleteButton={true} onClick={() => openModal(todo)}>
                        <FontAwesomeIcon icon={faTrash} style={{ fontSize: '18px' }} />
                    </TaskEditButton>

                    <ProgressCircle todo={todo} />
                </TaskButtons>

            </ToDoRight>
        </MainContainer>
        </motion.div>
        )
}

export default ToDo;