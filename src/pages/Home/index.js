import React, { useState, useEffect, useRef, useContext,createContext } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faArrowRight,
    faChevronUp,
    faChevronDown,
    faPowerOff,
    faPlus,
    faTrash
} from "@fortawesome/free-solid-svg-icons";
import {
    ButtonWrapper,
    FilterButton,
    FiltersContainer,
    InputButton,
    AddButton,
    DeleteAllButton,
    InputContainer,
    MainContainer,
    PowerModeButton,
    ToDosContainer,
} from "./styles.js";
import SearchInput from "../../components/SearchInput";
import SortingList from "../../components/SortingList";
import TagsList from "../../components/TagsList";
import ToDo from "../../components/Todo/index";
import { useTodo } from "../../context/todoContext";

const Home = (props) => {
    const [showSortingFilters, setShowSortingFilters] = useState(false);
    const [showTagsFilters, setShowTagsFilters] = useState(false);
    const refSorting = useRef(null);
    const refFilters = useRef(null);

    const {todos} = useTodo();

const TodoContext = createContext();

const logHook = () => {
    console.log(TodoContext);
}

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
                <SearchInput type='text' value={undefined} placeholder="Search..." {...props}></SearchInput>
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
            <ToDosContainer>
                <ToDo></ToDo>
                <ToDo></ToDo>
                {todos.map((todo) => (<ToDo></ToDo>))}
            </ToDosContainer>
            <Link to='/newTask' onClick={logHook}>
                <AddButton>
                    <FontAwesomeIcon icon={faPlus} />
                    Add New Task
                </AddButton>
            </Link>

            <DeleteAllButton>
                <FontAwesomeIcon icon={faTrash} />
                Delete All Tasks
            </DeleteAllButton>

        </MainContainer>
    );
};

export default Home;
