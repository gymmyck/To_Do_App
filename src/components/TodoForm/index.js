import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { BackButton, FormSection, HeaderContainer, MainContainer, SaveTaskButton, SectionContent, SectionTitle, TimeSection, TimeSubSection } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import FormInput from "../FormInput";
import FormButtons from "../FormButtons";
import TimeInput from "../TimeInput";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ToDoForm = ({ handleSubmitHook }) => {
    const [name, setName] = useState();
    const [priority, setPriority] = useState();
    const [complexity, setComplexity] = useState();
    const [dueDate, setDueDate] = useState();
    const [dueTime, setDueTime] = useState();
    const [subtasks, setSubtasks] = useState();
    const [tags, setTags] = useState();

    const navigate = useNavigate();

    const currentDate = new Date().toISOString().split('T')[0];
    const currentTime = new Date().toISOString().split('T')[1].slice(0, 5);

    console.log(dueDate, dueTime);

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
        console.log(task);
        navigate('/');
    }

    return (
        <MainContainer>
            <HeaderContainer>
                <Link to='/'>
                    <BackButton>
                        <FontAwesomeIcon icon={faArrowLeft} style={{ color: '#FFFFFF' }} />
                    </BackButton>
                </Link>
                Add New Task
            </HeaderContainer>

            <form onSubmit={handleSubmit}>
                <FormSection>
                    <SectionTitle>
                        Task Name
                    </SectionTitle>
                    <SectionContent>
                        <FormInput type='text' placeholder="Prepare for job interview" value={name} onChange={(e) => setName(e.target.value)} />
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
                            <TimeInput type='time' value={dueTime} min={currentTime} onChange={(e) => setDueTime(e.target.value)}/>
                        </SectionContent>
                    </TimeSubSection>
                </TimeSection>

                <FormSection>
                    <SectionTitle>
                        Checklist for subtasks
                    </SectionTitle>
                    <SectionContent>
                        <FormInput type='text' placeholder="Prepare for job interview" />
                    </SectionContent>
                </FormSection>

                <FormSection>
                    <SectionTitle>
                        Add Tags
                    </SectionTitle>
                    <SectionContent>
                        <FormInput type='text' placeholder="Prepare for job interview" />
                    </SectionContent>
                </FormSection>

                <SaveTaskButton onClick={handleSubmit}>Save Task</SaveTaskButton>
            </form>
        </MainContainer>

    )
}

export default ToDoForm;