import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faArrowRight,
    faChevronUp,
    faChevronDown,
    faPowerOff,
    faPlus
} from "@fortawesome/free-solid-svg-icons";
import {
    ButtonWrapper,
    FilterButton,
    FiltersContainer,
    InputButton,
    AddButton,
    InputContainer,
    MainContainer,
    PowerModeButton,
} from "./styles.js";
import SearchInput from "../../components/SearchInput";
import SortingList from "../../components/SortingList";
import TagsList from "../../components/TagsList";
import ToDo from "../../components/Todo/index";

const Home = (props) => {
    const [showSortingFilters, setShowSortingFilters] = useState(false);
    const [showTagsFilters, setShowTagsFilters] = useState(false);
    const refSorting = useRef(null);
    const refFilters = useRef(null);

    const clickOutside = (e) => {
        console.log("clicking")
        if (refSorting.current && !refSorting.current.contains(e.target)) {
            setShowSortingFilters(false);
        }

        if (refFilters.current && !refFilters.current.contains(e.target)) {
            setShowTagsFilters(false);
        }
    }

    const clickObject = (e) => {
        console.log(e.target);
    }

    useEffect(() => {
        document.addEventListener('mousedown', clickOutside);
        return () => {
            document.removeEventListener('mousedown', clickOutside);
        }
    }, [refSorting, refFilters])

    return (
        <MainContainer>
            <InputContainer>
                <SearchInput placeholder="Search..." {...props}></SearchInput>
                <InputButton>
                    <FontAwesomeIcon icon={faArrowRight} />
                </InputButton>
            </InputContainer>
            <PowerModeButton>
                <FontAwesomeIcon icon={faPowerOff} />
                Power Mode On
            </PowerModeButton>
            <FiltersContainer>
                <ButtonWrapper ref={refSorting}>
                    <FilterButton onClick={() => setShowSortingFilters(!showSortingFilters)}>
                        Sort
                        {showSortingFilters ? (
                            <FontAwesomeIcon icon={faChevronUp} />
                        ) : (
                            <FontAwesomeIcon icon={faChevronDown} />
                        )}
                    </FilterButton>
                    {showSortingFilters && (<SortingList></SortingList>)}
                </ButtonWrapper>
                <ButtonWrapper ref={refFilters}>
                    <FilterButton onClick={() => setShowTagsFilters(!showTagsFilters)}>
                        Category
                        {showTagsFilters ? (
                            <FontAwesomeIcon icon={faChevronUp} />
                        ) : (
                            <FontAwesomeIcon icon={faChevronDown} />
                        )}
                    </FilterButton>
                    {showTagsFilters && (<TagsList></TagsList>)}
                </ButtonWrapper>

            </FiltersContainer>

            <ToDo></ToDo>

            <AddButton>
                <FontAwesomeIcon icon={faPlus} />
                Add New Task
            </AddButton>

        </MainContainer>
    );
};

export default Home;
