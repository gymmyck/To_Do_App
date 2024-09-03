import React from "react";
import { Link } from 'react-router-dom';
import { BackButton, FormSection, HeaderContainer, MainContainer, SaveTaskButton, SectionContent, SectionTitle } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import FormInput from "../../components/FormInput";
import FormButtons from "../../components/FormButtons";

const AddTask = () => {
    return (
        <MainContainer>
            <HeaderContainer>
                <Link to='/'>
                    <BackButton>
                        <FontAwesomeIcon icon={faArrowLeft} style={{color: '#FFFFFF'}}/>
                    </BackButton>
                </Link>
                Add New Task
            </HeaderContainer>
            <FormSection>
                <SectionTitle>
                    Task Name
                </SectionTitle>
                <SectionContent>
                    <FormInput/>
                </SectionContent>
            </FormSection>
            <FormSection>
                <SectionTitle>
                    Set priority
                </SectionTitle>
                <SectionContent>
                    <FormButtons/>
                </SectionContent>
            </FormSection>
            <SaveTaskButton>Save Task</SaveTaskButton>
        </MainContainer>
    )
}


export default AddTask;