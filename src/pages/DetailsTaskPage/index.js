import React from "react";
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCalendarDays,
    faArrowUp,
    faArrowsUpDownLeftRight,
    faRotate,
    faCopy,
    faTrash,
    faCheck,
    faArrowLeft,
    faPen
} from "@fortawesome/free-solid-svg-icons";
import { MainContainer, ToDoContainer, TaskBullet, TaskTitleLine, TaskInfoLine, TaskTitle, ToDoLeft, TaskInfo, DueDate, TaskData, TaskTag, TaskProgress, HeaderContainer, BackButton, RepeatButton, DeleteTaskButton, FormSection, SectionTitle, SectionContent, TaskEditButton, TagsSection } from "./styles.js";
import { Line, Circle } from 'rc-progress';
import FormInput from "../../components/FormInput";
import { useTodo } from "../../context/todoContext";
import { levelDescription, percentageCalculator } from "../../utils.js";
import SubtaskList from "../../components/SubtasksList";
import styled from "styled-components";
import TagsList from "../../components/TagsList";

const DetailTask = () => {
    const { id } = useParams();
    const { getTodo, completeSubtask } = useTodo();
    const todo = getTodo(id);
    const subtasks = todo.subtasks;
    const percentage = percentageCalculator(todo);

    if (!todo) return null;

    return (
        <MainContainer>

            <HeaderContainer>
                <Link to='/'>
                    <BackButton>
                        <FontAwesomeIcon icon={faArrowLeft} style={{ color: '#FFFFFF' }} />
                    </BackButton>
                </Link>
                Task Details
                <Link to={`/editTask/${todo.id}`}>
                    <TaskEditButton>
                        <FontAwesomeIcon icon={faPen} style={{ color: '#FFFFFF' }} />
                    </TaskEditButton>
                </Link >
            </HeaderContainer>

            <ToDoContainer>
                <ToDoLeft>
                    <TaskTitleLine>
                        <TaskBullet style={{ marginLeft: '1px' }} />
                        <TaskTitle>{todo.name}</TaskTitle>
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
                    <TagsSection>
                        {todo.tagsArray ? <TagsList tags={todo.tagsArray}></TagsList> : null}
                    </TagsSection>
                    <TaskProgress>
                        <div>
                            <p>Task Completed</p>
                            <p>{`${percentage}`}%</p>
                        </div>
                        <Line percent={percentage} strokeWidth={4} strokeColor="#0D99FF" trailWidth={4} trailColor="#D3D3D3" />
                    </TaskProgress>
                </ToDoLeft>
            </ToDoContainer>

            <FormSection>
                <SectionTitle>
                    Checklist for subtasks
                </SectionTitle>
                <SectionContent>
                    {subtasks ? <SubtaskList subtasks={subtasks} detailsPage completeSubtask={completeSubtask} todoId={id}></SubtaskList> : null}
                </SectionContent>
            </FormSection>


            <RepeatButton>
                <FontAwesomeIcon icon={faRotate} />
                Repeat Task
            </RepeatButton>

            <DeleteTaskButton>
                <FontAwesomeIcon icon={faTrash} />
                Delete Task
            </DeleteTaskButton>

        </MainContainer>
    )
}

export default DetailTask;