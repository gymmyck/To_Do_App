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
    // const [filteredTodos, setFilteredTodos] = useState(todos);
    const [showSortingFilters, setShowSortingFilters] = useState(false);
    const [showTagsFilters, setShowTagsFilters] = useState(false);
    const [tagsList, setTagsList] = useState([])
    const [checkedTags, setCheckedTags] = useState({});
    const refSorting = useRef(null);
    const refFilters = useRef(null);

    const TodoContext = createContext();

    const handleCheckboxChange = (e, id) => {
        const isChecked = e.target.checked;
        setCheckedTags({ ...checkedTags, [id]: isChecked });
    }

    const getCheckedTagNames = () => {
        const theArray = Object.keys(checkedTags)
            .filter((tagId) => checkedTags[tagId])
            .map((tagId) => {
                const todoWithTag = todos.find((todo) =>
                    todo.tagsArray.some((tag) => tag.id === tagId)
                );
                return todoWithTag?.tagsArray.find((tag) => tag.id === tagId)?.name;
            })
            .filter((tagName) => tagName);
        console.log(theArray);
        return theArray;
    }



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

    const getTagsList = () => {
        const tagsList = todos
            .map((todo) => todo.tagsArray)
            .flat();

        // The snippet below uses the .reduce() method and it does the same thing,
        // essentially adding all the tags from all the todos into one single list

        // const tagsList = todos.reduce ((acc,todo, index) => {
        //     if(Array.isArray(todo.tagsArray)){
        //         acc.push(...todo.tagsArray);
        //         todo.tagsArray.forEach((item,idx) => console.log(`todo ${index}, tag ${idx}:`, item))
        //     } else {
        //         console.log(`todo ${index} has no tagsArray or it's not an array.`);
        //     }
        //     return acc;
        // }, []);

        // console.log('HERE', tagsList);
        return tagsList;
    }

    // const tagsList  = todos.flatMap((todo) => todo.tagsArray)

    // const filterByName = () => {
    //     setFilteredTodos(todos.filter((todo) => todo.name.toLowerCase().includes(searchValue.toLowerCase())));
    // }

    const filterByTag = () => {

    }

    const filteredTodos = todos
        .filter((todo) => todo.name.toLowerCase().includes(searchValue.toLowerCase()))
        .filter((todo) => {
            const checkedTagNames = getCheckedTagNames() || [];
            console.log('checked BBBB:', checkedTagNames);
            if (checkedTagNames.length === 0) return true;
            return checkedTagNames.every((tag) => todo.tagsArray.some((todoTag) => todoTag.name === tag)
            );
        });

    useEffect(() => {
        document.addEventListener('mousedown', clickOutside);
        return () => {
            document.removeEventListener('mousedown', clickOutside);
        }
    }, [refSorting, refFilters, searchValue])

    // useEffect(() => {
    //     // console.log("Search value updated:", searchValue);
    //     filterByName();
    // }, [searchValue]);

    useEffect(() => {
        const tags = getTagsList();
        setTagsList(tags);
        // console.log('list tags', tags);
    }, [todos]);

    useEffect(() => {
        getCheckedTagNames();
        console.log(checkedTags)
    }, [checkedTags])

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
                    {showTagsFilters && (<TagsDropList tagsList={tagsList} handleCheckboxChange={handleCheckboxChange} checkedTags={checkedTags} setCheckedTags={setCheckedTags}></TagsDropList>)}
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
