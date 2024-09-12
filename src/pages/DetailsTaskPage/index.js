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
    faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import { MainContainer, ToDoContainer, TaskBullet, TaskTitleLine, TaskInfoLine, TaskTitle, ToDoLeft, TaskInfo, DueDate, TaskData, TaskTag, TaskProgress, HeaderContainer, BackButton, RepeatButton, DeleteAllButton, FormSection, SectionTitle, SectionContent } from "./styles.js";
import { Line, Circle } from 'rc-progress';
import FormInput from "../../components/FormInput";
import { useTodo } from "../../context/todoContext";
import { levelDescription } from "../../utils.js";

const DetailTask = () => {
    const { id } = useParams();
    const { getTodo } = useTodo();
    const todo = getTodo(id);

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
            </HeaderContainer>

            <ToDoContainer>
                <ToDoLeft>
                    <TaskTitleLine>
                        <TaskBullet style={{ marginLeft: '1px' }} />
                        <Link to='/taskDetail'>
                            <TaskTitle>{todo.name}</TaskTitle>
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
                    <div>
                        <TaskTag>
                            Job Interview
                        </TaskTag>
                    </div>
                    <TaskProgress>
                        <Line percent={70} strokeWidth={4} strokeColor="#0D99FF" trailWidth={4} trailColor="#616161" />
                    </TaskProgress>
                </ToDoLeft>
            </ToDoContainer>

            <FormSection>
                <SectionTitle>
                    Task Name
                </SectionTitle>
                <SectionContent>
                    <FormInput type='text' placeholder="Prepare for job interview" />
                </SectionContent>
            </FormSection>


            <RepeatButton>
                <FontAwesomeIcon icon={faRotate} />
                Repeat Task
            </RepeatButton>

            <DeleteAllButton>
                <FontAwesomeIcon icon={faTrash} />
                Delete Task
            </DeleteAllButton>

        </MainContainer>
    )
}

export default DetailTask;