import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { BackButton, AddSubtaskButton, FormSection, HeaderContainer, MainContainer, SaveTaskButton, SectionContent, SectionTitle, TimeSection, TimeSubSection } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faPlus
} from "@fortawesome/free-solid-svg-icons";
import FormInput from "../FormInput";
import FormButtons from "../FormButtons";
import TimeInput from "../TimeInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { uid } from "uid";
import SubtaskList from "../SubtasksList";

const ToDoForm = ({ todo, title, handleSubmitHook, updateStorage }) => {
    const [name, setName] = useState(todo ? todo.name : '');
    const [priority, setPriority] = useState(todo ? todo.priority : '');
    const [complexity, setComplexity] = useState(todo ? todo.complexity : '');
    const [dueDate, setDueDate] = useState(todo ? todo.dueDate : '');
    const [dueTime, setDueTime] = useState(todo ? todo.dueTime : '');
    const [subtasks, setSubtasks] = useState(todo ? todo.subtasks : []);
    const [tags, setTags] = useState(todo ? todo.tags : '');

    const [subtaskInput, setSubtaskInput] = useState('');
    const [tagInput, setTagInput] = useState('');

    const navigate = useNavigate();

    const currentDate = new Date().toISOString().split('T')[0];
    const currentTime = new Date().toISOString().split('T')[1].slice(0, 5);

    // console.log(dueDate, dueTime);

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = {
            name,
            priority,
            complexity,
            dueDate,
            dueTime,
            subtasks,
            tags
        }
        handleSubmitHook(task);
        // console.log(task);
        navigate('/');
    }

    const submitSubtask = () => {
        const subtask = {
            id: uid(),
            name: subtaskInput,
            isCompleted: false,
        }
        setSubtasks([...subtasks, subtask])
        setSubtaskInput('');
    }

    const submitTags = () => {
        
    }

    const completeSubtask = (id) => {
        const newSubtasks = subtasks.map((subtask) => {
            if (id = subtask.id) {
                subtask.isCompleted = !subtask.isCompleted;
            }
            return subtask;
        }
        )
        setSubtasks(newSubtasks);
    }

    const removeSubtask = (id) => {
        const newSubtasks = subtasks.filter((subtask) => subtask.id !== id)
        setSubtasks(newSubtasks);
    }

    useEffect(() => {
        console.log(tags);
    }, [tags])

    return (
        <MainContainer>
            <HeaderContainer>
                <Link to='/'>
                    <BackButton>
                        <FontAwesomeIcon icon={faArrowLeft} style={{ color: '#FFFFFF' }} />
                    </BackButton>
                </Link>
                {title}
            </HeaderContainer>

            <form onSubmit={handleSubmit}>
                <FormSection>
                    <SectionTitle>
                        Task Name
                    </SectionTitle>
                    <SectionContent>
                        <FormInput type='text' placeholder="Add task name..." value={name} onChange={(e) => setName(e.target.value)} />
                    </SectionContent>
                </FormSection>

                <FormSection>
                    <SectionTitle>
                        Select priority level
                    </SectionTitle>
                    <SectionContent>
                        <FormButtons name='priority' id="task-priority" value={priority} handleChange={(e) => setPriority(Number(e.target.value))} />
                    </SectionContent>
                </FormSection>

                <FormSection>
                    <SectionTitle>
                        Select complexity level
                    </SectionTitle>
                    <SectionContent>
                        <FormButtons name='complexity' id="task-complexity" value={complexity} handleChange={(e) => setComplexity(Number(e.target.value))} />
                    </SectionContent>
                </FormSection>

                <TimeSection>
                    <TimeSubSection>
                        <SectionTitle>
                            Select Due Date
                        </SectionTitle>
                        <SectionContent justifyType='date'>
                            <TimeInput type='date' value={dueDate} min={currentDate} onChange={(e) => setDueDate(e.target.value)} />
                            {/* <DatePicker
                        selected={date}
                        onSelect={handleDateSelect} //when day is clicked
                    //   onChange={handleDateChange} //only when value has changed
                    /> */}
                        </SectionContent>
                    </TimeSubSection>
                    <TimeSubSection>
                        <SectionTitle>
                            Select Time
                        </SectionTitle>
                        <SectionContent justifyType='time' >
                            <TimeInput type='time' value={dueTime} min={currentTime} onChange={(e) => setDueTime(e.target.value)} />
                        </SectionContent>
                    </TimeSubSection>
                </TimeSection>

                <FormSection>
                    <SectionTitle>
                        Add subtasks
                    </SectionTitle>
                    <SectionContent>
                        <FormInput type='text' placeholder="Add subtasks..." value={subtaskInput} onChange={(e) => setSubtaskInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && submitSubtask} />
                        <AddSubtaskButton type='button' onClick={submitSubtask}>
                            <FontAwesomeIcon icon={faPlus} style={{ fontSize: '14px' }} />
                        </AddSubtaskButton>
                    </SectionContent>
                </FormSection>
                <FormSection>
                    {subtasks ? <SubtaskList subtasks={subtasks} completeSubtask={completeSubtask} removeSubtask={removeSubtask} ></SubtaskList> : null}
                </FormSection>
                <FormSection>
                    <SectionTitle>
                        Add Tags
                    </SectionTitle>
                    <SectionContent>
                        <FormInput type='text' placeholder="Add tags..." value={tags} onChange={(e) => setTags(e.target.value)} onKeyDown = {(e) => e.key === 'Enter' && submitTags}/>
                        <AddSubtaskButton type='button' onClick={submitTags}>
                            <FontAwesomeIcon icon={faPlus} style={{ fontSize: '14px' }} />
                        </AddSubtaskButton>
                    </SectionContent>
                </FormSection>
                <FormSection>
                    {tags ? tags : null}
                </FormSection>

                <SaveTaskButton onClick={handleSubmit}>Save Task</SaveTaskButton>
            </form>
        </MainContainer>

    )
}

export default ToDoForm;