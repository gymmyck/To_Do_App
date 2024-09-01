import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MainContainer, TaskBullet, ToDoLeft, ToDoRight } from "./styles";

const ToDo = () => {
    return (
        <MainContainer>
            <ToDoLeft>
                <TaskBullet></TaskBullet>
                Prepare for job interview
            </ToDoLeft>
            <ToDoRight></ToDoRight>
        </MainContainer>)
}

export default ToDo;