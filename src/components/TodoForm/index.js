import React from "react";
import { Link } from 'react-router-dom';
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

const ToDoForm = () => {
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

        <FormSection>
            <SectionTitle>
                Task Name
            </SectionTitle>
            <SectionContent>
                <FormInput type='text' placeholder="Prepare for job interview" />
            </SectionContent>
        </FormSection>

        <FormSection>
            <SectionTitle>
                Select priority level
            </SectionTitle>
            <SectionContent>
                <FormButtons name='priority' id="task-priority" />
            </SectionContent>
        </FormSection>

        <FormSection>
            <SectionTitle>
                Select complexity level
            </SectionTitle>
            <SectionContent>
                <FormButtons name='complexity' id="task-complexity" />
            </SectionContent>
        </FormSection>

        <TimeSection>
            <TimeSubSection>
                <SectionTitle>
                    Select Due Date
                </SectionTitle>
                <SectionContent justifyType='date'>
                    <TimeInput type='date' placeholder="Prepare for job interview" />
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
                <SectionContent justifyType='time'>
                    <TimeInput type='time' placeholder="Prepare for job interview" />
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

        <SaveTaskButton>Save Task</SaveTaskButton>
    </MainContainer>

    )    
}

export default ToDoForm;