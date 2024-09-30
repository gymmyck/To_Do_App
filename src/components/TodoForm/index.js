import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { BackButton, AddSubtaskButton, FormSection, HeaderContainer, MainContainer, SaveTaskButton, SectionContent, SectionTitle, TimeSection, TimeSubSection, TagsSection, ErrorDiv, ErrorMessage } from "./styles";
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
import TagsList from "../TagsList";

const ToDoForm = ({ todo, title, handleSubmitHook, updateStorage }) => {
    const [name, setName] = useState(todo ? todo.name : '');
    const [priority, setPriority] = useState(todo ? todo.priority : '');
    const [complexity, setComplexity] = useState(todo ? todo.complexity : '');
    const [dueDate, setDueDate] = useState(todo ? todo.dueDate : '');
    const [dueTime, setDueTime] = useState(todo ? todo.dueTime : '');
    const [subtasks, setSubtasks] = useState(todo ? todo.subtasks : []);
    const [tags, setTags] = useState(todo ? todo.tags : '');
    const [tagsArray, setTagsArray] = useState(todo && todo.tagsArray ? todo.tagsArray : []);
    const [subtaskInput, setSubtaskInput] = useState('');
    const [errorMessage, setErrorMessage] = useState({});

    const navigate = useNavigate();

    const currentDate = new Date().toISOString().split('T')[0];
    const currentTime = new Date().toISOString().split('T')[1].slice(0, 5);

    // console.log(dueDate, dueTime);

    const handleSubmit = (e) => {
        e.preventDefault();

        let errors = {};

        if (name === '') errors.name = 'Task name is required';
        if (priority === '') errors.priority = 'Priority is required';
        if (complexity === '') errors.complexity = 'Complexity is required';
        if (dueDate === '') errors.dueDate = 'Due date is required';
        console.log(errors)
        if (Object.keys(errors).length > 0) {
            setErrorMessage(errors);
        } else {
            const task = {
                name,
                priority,
                complexity,
                dueDate,
                dueTime,
                subtasks,
                tagsArray
            }
            handleSubmitHook(task);
            // console.log(task);
            navigate('/');
        }
    }

    const checkInputChange = (field, value) => {

        const errorTexts = {
            name: 'Task name is required',
            priority: 'Priority is required',
            complexity: 'Complexity is required',
            dueDate: 'Due date is required',
        }

        let updatedErrors = { ...errorMessage }

        if (value.trim() === '') {
            updatedErrors[field] = errorTexts[field]
        } else {
            delete updatedErrors[field];
        }

        if (Object.keys(errorMessage).length !== Object.keys(updatedErrors).length) {
            setErrorMessage(updatedErrors);
        }
        console.log(updatedErrors);
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

    const removeSubtask = (id) => {
        const newSubtasks = subtasks.filter((subtask) => subtask.id !== id)
        setSubtasks(newSubtasks);
    }

    const tagsToArray = () => {
        const arrayTags = tags.split(' ').join('').split(',');
        const newTagsArray = arrayTags.map((item) => (
            {
                id: uid(),
                name: item
            }));
        setTagsArray([...tagsArray, ...newTagsArray]);
        setTags('');
    }

    const removeTag = (id) => {
        const newTags = tagsArray.filter((tag) => id !== tag.id)
        setTagsArray(newTags);
    }

    useEffect(() => {
        // console.log(tags)
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
                        <FormInput nameError={errorMessage.name} type='text' placeholder="Add task name..." value={name} onChange={(e) => { setName(e.target.value); checkInputChange('name', e.target.value) }} />
                    </SectionContent>
                    <ErrorMessage>{errorMessage.name}</ErrorMessage>
                </FormSection>

                <FormSection>
                    <SectionTitle>
                        Select priority level
                    </SectionTitle>
                    <SectionContent>
                        <FormButtons nameError={errorMessage.priority} name='priority' id="task-priority" value={priority} handleChange={(e) => { setPriority(Number(e.target.value)); checkInputChange('priority', e.target.value) }} />
                    </SectionContent>
                    <ErrorMessage>{errorMessage.priority}</ErrorMessage>
                </FormSection>

                <FormSection>
                    <SectionTitle>
                        Select complexity level
                    </SectionTitle>
                    <SectionContent>
                        <FormButtons nameError={errorMessage.complexity} name='complexity' id="task-complexity" value={complexity} handleChange={(e) => { setComplexity(Number(e.target.value)); checkInputChange('complexity', e.target.value) }} />
                    </SectionContent>
                    <ErrorMessage>{errorMessage.complexity}</ErrorMessage>
                </FormSection>

                <TimeSection>
                    <TimeSubSection>
                        <SectionTitle>
                            Select Due Date
                        </SectionTitle>
                        <SectionContent justifyType='date'>
                            <TimeInput nameError={errorMessage.dueDate} type='date' value={dueDate} min={currentDate} onChange={(e) => { setDueDate(e.target.value); checkInputChange('dueDate', e.target.value) }} />
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
                <ErrorDiv><ErrorMessage>{errorMessage.dueDate}</ErrorMessage></ErrorDiv>


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
                    {subtasks ? <SubtaskList subtasks={subtasks} removeSubtask={removeSubtask} ></SubtaskList> : null}
                </FormSection>
                <FormSection>
                    <SectionTitle>
                        Add Tags
                    </SectionTitle>
                    <SectionContent>
                        <FormInput type='text' placeholder="Add tags..." value={tags} onChange={(e) => setTags(e.target.value)} />
                        <AddSubtaskButton type='button' onClick={tagsToArray}>
                            <FontAwesomeIcon icon={faPlus} style={{ fontSize: '14px' }} />
                        </AddSubtaskButton>
                    </SectionContent>
                </FormSection>
                <TagsSection>
                    {tagsArray ? <TagsList tags={tagsArray} removeTag={removeTag} edit></TagsList> : null}
                </TagsSection>

                <SaveTaskButton onClick={handleSubmit}>Save Task</SaveTaskButton>
            </form>
        </MainContainer>

    )
}

export default ToDoForm;


// const checkInputChange = (field, value) => {

//     let updatedErrors = { ...errorMessage }

//     if (field === 'name' && value.trim() === '') {
//         updatedErrors[field] = 'Task name is required';
//     } else {
//         delete updatedErrors[field];
//     };

//     if (field === 'priority' && value === '') {
//         updatedErrors[field] = 'Priority is required';

//     } else {
//         delete updatedErrors[field];
//     }
//     if (field === 'complexity' && value === '') {
//         updatedErrors[field] = 'Complexity is required';

//     } else {
//         delete updatedErrors[field];
//     }
//     if (field === 'dueDate' && value === '') {
//         updatedErrors[field] = 'Due date is required';

//     } else {
//         delete updatedErrors[field];
//     }

//     if (Object.keys(errorMessage).length !== Object.keys(updatedErrors).length) {
//     setErrorMessage(updatedErrors);
//     }
//     console.log(updatedErrors);
// }