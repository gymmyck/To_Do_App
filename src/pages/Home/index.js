import React, { useState, useEffect, useRef, useContext, createContext } from "react";
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
import SortingDropList from "../../components/SortingDropList";
import TagsDropList from "../../components/TagsDropList";
import ToDo from "../../components/Todo/index";
import { useTodo } from "../../context/todoContext";
import styled from "styled-components";
import NoTodoLogo from "../../components/Logos/NoTodosLogo.js";

const NoTodosLogo = styled.div`

`;


const Home = (props) => {
    const { todos, removeAllTodos } = useTodo();
    const [searchValue, setSearchValue] = useState('');
    const [filteredTodos, setFilteredTodos] = useState(todos);
    const [showSortingFilters, setShowSortingFilters] = useState(false);
    const [showTagsFilters, setShowTagsFilters] = useState(false);
    const refSorting = useRef(null);
    const refFilters = useRef(null);

    const TodoContext = createContext();

    // const logHook = () => {
    //     console.log(TodoContext);
    // }

    const handleSearch = (e) => {
        setSearchValue(e.target.value.trim());
    }

    const clickOutside = (e) => {
        // console.log("clicking")
        if (refSorting.current && !refSorting.current.contains(e.target)) {
            setShowSortingFilters(false);
        }

        if (refFilters.current && !refFilters.current.contains(e.target)) {
            setShowTagsFilters(false);
        }
    }

    const clickObject = (e) => {
        // console.log(e.target);
    }

    useEffect(() => {
        document.addEventListener('mousedown', clickOutside);
        return () => {
            document.removeEventListener('mousedown', clickOutside);
        }
    }, [refSorting, refFilters, searchValue])

    useEffect(() => {
        console.log("Search value updated:", searchValue);
        setFilteredTodos(todos.filter((todo) => todo.name.toLowerCase().includes(searchValue.toLowerCase())));
    }, [searchValue]);

    return (
        <MainContainer>
            <InputContainer>
                <SearchInput type='text' placeholder="Search..." value={searchValue} onChange={handleSearch} {...props}></SearchInput>
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
                    {showSortingFilters && (<SortingDropList></SortingDropList>)}
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
                    {showTagsFilters && (<TagsDropList></TagsDropList>)}
                </ButtonWrapper>

            </FiltersContainer>
            <ToDosContainer>
                {todos.length === 0 ?
                    <NoTodoLogo></NoTodoLogo> :
                    filteredTodos.map((todo, index) => (<ToDo key={index} todo={todo}></ToDo>))}
            </ToDosContainer>
            <Link
                to='/newTask'
            // onClick={logHook}
            >
                <AddButton>
                    <FontAwesomeIcon icon={faPlus} />
                    Add New Task
                </AddButton>
            </Link>

            <DeleteAllButton onClick={removeAllTodos}>
                <FontAwesomeIcon icon={faTrash} />
                Delete All Tasks
            </DeleteAllButton>

        </MainContainer>
    );
};

export default Home;
