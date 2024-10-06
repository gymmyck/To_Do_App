import React, { useState } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
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
import { motion } from "framer-motion";
import { MainContainer, Title, ToDoContainer, TaskBullet, TaskTitleLine, TaskInfoLine, TaskTitle, ToDoLeft, TaskInfo, DueDate, TaskData, TaskTag, TaskProgress, HeaderContainer, BackButton, RepeatButton, DeleteTaskButton, FormSection, SectionTitle, SectionContent, TaskEditButton, TagsSection } from "./styles.js";
import { Line, Circle } from 'rc-progress';
import FormInput from "../../components/FormInput";
import { useTodo } from "../../context/todoContext";
import { levelDescription, percentageCalculator, calculateDueDays, setDueDaysColor } from "../../utils.js";
import SubtaskList from "../../components/SubtasksList";
import styled from "styled-components";
import TagsList from "../../components/TagsList";
import DeleteTaskModal from "../../components/DeleteTaskModal";


const DetailTask = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { getTodo, completeSubtask, removeTodo, duplicateTodo } = useTodo();
    const todo = getTodo(id);
    const [showDeleteTaskModal, setShowDeleteTaskModal] = useState(false);
    if (!todo) return null;
    const subtasks = todo.subtasks;
    const percentage = percentageCalculator(todo);

    const openModal = () => {
        setShowDeleteTaskModal(true);
    }

    const closeModal = () => {
        setShowDeleteTaskModal(false);
    }

    const dueDays = calculateDueDays(todo.dueDate);

    const dueDaysColor = setDueDaysColor(todo.isCompleted, dueDays);

    const getDateDescription = (todo, dueDays) => {
        if (dueDays === 2) {
            return 'Tomorrow';
        } else if (dueDays === 0 || dueDays === 1) {
            return 'Today';
        } else if (dueDays < 0) {
            return 'Overdue';
        } else {
            return `${todo.dueDate} at ${todo.dueTime || 'n/a'}`;
        }
    };

    return (

        <>
            {showDeleteTaskModal && <DeleteTaskModal todoToDelete={todo} removeTodo={removeTodo} closeModal={closeModal} />}

            <motion.div
                initial={{ x: "100vw" }} // Start completely off-screen to the right
                animate={{ x: "-50%" }} // Animate to center the div
                transition={{ type: "spring", stiffness: 100, damping: 20 }} // Smooth spring transition
                style={{
                    position: "absolute",
                    left: "50%",
                    transform: "translate(-50%, -50%)", // Center both horizontally and vertically
                }}
            >

                <div>
                    <MainContainer showDeleteTaskModal={showDeleteTaskModal}>

                        <HeaderContainer>
                            <Link to='/'>
                                <BackButton>
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                </BackButton>
                            </Link>
                            <Title>Task Details</Title>
                            <Link to={`/editTask/${todo.id}`}>
                                <TaskEditButton>
                                    <FontAwesomeIcon icon={faPen} />
                                </TaskEditButton>
                            </Link >
                        </HeaderContainer>

                        <ToDoContainer completed={todo.isCompleted} dueDays={dueDays}>
                            <ToDoLeft>
                                <TaskTitleLine>
                                    <TaskBullet style={{ marginLeft: '1px' }} dueDaysColor={dueDaysColor} />
                                    <TaskTitle completed={todo.isCompleted}>{todo.name}</TaskTitle>
                                </TaskTitleLine>
                                <TaskInfoLine>
                                    <FontAwesomeIcon icon={faCalendarDays} style={{ fontSize: '20px', paddingLeft: '2px' }} />
                                    <TaskInfo style={{ paddingLeft: '11px' }}>Due Date:</TaskInfo>
                                    <DueDate style={{ paddingLeft: '8px' }} dueDaysColor={dueDaysColor}>{todo.isCompleted ? `Completed` : `${getDateDescription(todo, dueDays)}`}</DueDate>
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
                                {subtasks ? <SubtaskList subtasks={subtasks} detailsPage completeSubtask={completeSubtask} todoId={id} todo={todo}></SubtaskList> : null}
                            </SectionContent>
                        </FormSection>


                        <RepeatButton onClick={() => { duplicateTodo(todo); navigate('/') }}>
                            <FontAwesomeIcon icon={faRotate} />
                            Repeat Task
                        </RepeatButton>

                        <DeleteTaskButton onClick={() => openModal()}>
                            <FontAwesomeIcon icon={faTrash} />
                            Delete Task
                        </DeleteTaskButton>

                    </MainContainer>
                </div>
            </motion.div>
        </>
    )
}

export default DetailTask;



// removeTodo(todo)