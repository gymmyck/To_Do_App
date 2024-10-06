import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
import { motion } from "framer-motion";
import SearchInput from "../../components/SearchInput";
import SortingDropList from "../../components/SortingDropList";
import TagsDropList from "../../components/TagsDropList";
import ToDo from "../../components/Todo/index";
import { useTodo } from "../../context/todoContext";
import NoTodoLogo from "../../components/Logos/NoTodosLogo.js";
import DeleteTaskModal from "../../components/DeleteTaskModal";
import DeleteAllTasksModal from "../../components/DeleteAllTasksModal";

const Home = (props) => {
    const { todos, removeAllTodos, removeTodo } = useTodo();
    const [searchValue, setSearchValue] = useState('');
    const [showSortingFilters, setShowSortingFilters] = useState(false);
    const [showTagsFilters, setShowTagsFilters] = useState(false);
    const [tagsList, setTagsList] = useState([])
    const [checkedTags, setCheckedTags] = useState({});
    const [sort, setSort] = useState('');
    const [showDeleteTaskModal, setShowDeleteTaskModal] = useState(false);
    const [showDeleteTaskModalAll, setShowDeleteTaskModalAll] = useState(false);
    const [todoToDelete, setTodoToDelete] = useState(null);
    const [isPowerMode, setIsPowerMode] = useState(false);
    const refSorting = useRef(null);
    const refFilters = useRef(null);

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
        return theArray;
    }

    const handleSortChoice = (e) => {
        setSort(e.target.value);
        setShowSortingFilters(false);
        console.log(e.target.value);
    }

    const togglePowerMode = () => {
        setIsPowerMode(!isPowerMode);
        handleSortChoice({ target: { value: 'Power Mode' } });
    }

    function sortTodos(todos) {
        const sortedTodos = [...todos];

        switch (sort) {
            case 'Ascending Date':
                sortedTodos.sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
                break;
            case 'Descending Date':
                sortedTodos.sort((a, b) => new Date(b.dueDate).getTime() - new Date(a.dueDate).getTime());
                break;
            case 'Ascending Priority':
                sortedTodos.sort((a, b) => a.priority - b.priority);
                break;
            case 'Descending Priority':
                sortedTodos.sort((a, b) => b.priority - a.priority);
                break;
            case 'Ascending Complexity':
                sortedTodos.sort((a, b) => a.complexity - b.complexity);
                break;
            case 'Descending Complexity':
                sortedTodos.sort((a, b) => b.complexity - a.complexity);
                break;
            case 'Power Mode':
                sortedTodos.sort((a, b) => (b.complexity + b.priority) - (a.complexity + a.priority));
                break;
            default:
                break;
        }
        return sortedTodos;
    }

    const handleSearch = (e) => {
        setSearchValue(e.target.value.trim());
    }

    const clickOutside = (e) => {
        if (refSorting.current && !refSorting.current.contains(e.target)) {
            setShowSortingFilters(false);
        }

        if (refFilters.current && !refFilters.current.contains(e.target)) {
            setShowTagsFilters(false);
        }
    }

    const getTagsList = () => {
        const tagsList = todos
            .map((todo) => todo.tagsArray)
            .flat();
        const uniqueTags = Array.from(
            tagsList.reduce((acc, current) => {
                if (!acc.has(current.name)) {
                    acc.set(current.name, current);
                }
                return acc;
            }, new Map()).values()
        );
        return uniqueTags;
    }

    const openModal = (todo) => {
        setShowDeleteTaskModal(true);
        setTodoToDelete(todo)
    }

    const closeModal = () => {
        setShowDeleteTaskModal(false);
    }

    const openModalAll = () => {
        setShowDeleteTaskModalAll(true);
    }

    const closeModalAll = () => {
        setShowDeleteTaskModalAll(false);
    }

    const filteredTodos = todos
        .filter((todo) => todo.name.toLowerCase().includes(searchValue.toLowerCase()))
        .filter((todo) => {
            const checkedTagNames = getCheckedTagNames() || [];
            if (checkedTagNames.length === 0) return true;
            return checkedTagNames.every((tag) => todo.tagsArray.some((todoTag) => todoTag.name === tag)
            );
        });

    const sortedTodos = sortTodos(filteredTodos);

    // filtering out the complete todos, in order to get the #1 incomplete todo (priority+complexity)

    const incompleteTodos = sortedTodos.filter((todo) => !todo.isCompleted);

    const powerModeTodo = incompleteTodos.length > 0 ? incompleteTodos[0] : null;

    useEffect(() => {
        document.addEventListener('mousedown', clickOutside);
        return () => {
            document.removeEventListener('mousedown', clickOutside);
        }
    }, [refSorting, refFilters, searchValue])

    useEffect(() => {
        const tags = getTagsList();
        setTagsList(tags);
    }, [todos]);

    useEffect(() => {
        getCheckedTagNames();
    }, [checkedTags])

    return (
        <>
            {showDeleteTaskModal && <DeleteTaskModal todoToDelete={todoToDelete} removeTodo={removeTodo} closeModal={closeModal} />}
            {showDeleteTaskModalAll && <DeleteAllTasksModal removeAllTodos={removeAllTodos} closeModal={closeModalAll} />}

            <motion.div
                initial={{ x: "-100vw" }}
                animate={{ x: "-50%" }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                style={{
                    position: "absolute",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            >

                <div>

                    <MainContainer showDeleteTaskModal={showDeleteTaskModal} showDeleteTaskModalAll={showDeleteTaskModalAll}>
                        <InputContainer>
                            <SearchInput type='text' placeholder="Search..." value={searchValue} onChange={handleSearch} {...props}></SearchInput>
                            <InputButton>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </InputButton>
                        </InputContainer>
                        <PowerModeButton onClick={() => togglePowerMode()}>
                            <FontAwesomeIcon icon={faPowerOff} />
                            {isPowerMode ? 'Power Mode On' : 'Power Mode Off'}
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
                                {showSortingFilters && (<SortingDropList sort={sort} handleSortChoice={handleSortChoice}></SortingDropList>)}
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
                            {todos.length === 0 ? (
                                <NoTodoLogo />
                            ) : (isPowerMode ? (
                                powerModeTodo ? (
                                    <ToDo key={powerModeTodo.id} todo={powerModeTodo} openModal={openModal} />
                                ) : (
                                    <p>No tasks remaining!</p>
                                )
                            ) : (
                                sortedTodos.map((todo, index) => (<ToDo key={index} todo={todo} openModal={openModal} />))
                            )
                            )
                            }
                        </ToDosContainer>
                        <Link to='/newTask'>
                            <AddButton>
                                <FontAwesomeIcon icon={faPlus} />
                                Add New Task
                            </AddButton>
                        </Link>

                        <DeleteAllButton onClick={() => openModalAll()}>
                            <FontAwesomeIcon icon={faTrash} />
                            Delete All Tasks
                        </DeleteAllButton>
                    </MainContainer>
                </div>
            </motion.div>
        </>
    );
};

export default Home;