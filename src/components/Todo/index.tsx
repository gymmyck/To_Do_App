import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendarDays,
    faArrowUp,
    faArrowsUpDownLeftRight,
    faPen,
    faCheck
} from "@fortawesome/free-solid-svg-icons";
import { MainContainer, TaskBullet, TaskTitleLine, TaskInfoLine, TaskTitle, ToDoLeft, ToDoRight, TaskInfo, DueDate, TaskData, TaskTag, TaskEditButton, TaskButtons } from "./styles";
import ProgressCircle from "../ProgressCircle";

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
                    <TaskEditButton>
                        <FontAwesomeIcon icon={faPen} style={{ fontSize: '14px' }} />
                    </TaskEditButton>
                    <TaskEditButton>
                        <FontAwesomeIcon icon={faCheck} style={{ fontSize: '18px' }} />
                    </TaskEditButton>
                </TaskButtons>
                <ProgressCircle></ProgressCircle>
            </ToDoRight>
        </MainContainer>)
}

export default ToDo;