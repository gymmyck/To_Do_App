import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
    faArrowRight,
    faChevronUp,
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import {
    ButtonWrapper,
    FilterButton,
    FiltersContainer,
    InputButton,
    InputContainer,
    MainContainer,
} from "./styles.js";
import SearchInput from "../../components/SearchInput";
import SortingList from "../../components/SortingList";
import TagsList from "../../components/TagsList";

const Home = (props) => {
    const [showSortingFilters, setShowSortingFilters] = useState(false);
    const [showTagsFilters, setShowTagsFilters] = useState(false);
    const ref = useRef(null);

    const clickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setShowSortingFilters(false);
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
    }, [ref])

    return (
        <MainContainer>
            <InputContainer>
                <SearchInput placeholder="Search..." {...props}></SearchInput>
                <InputButton>
                    <FontAwesomeIcon icon={faArrowRight} />
                </InputButton>
            </InputContainer>
            <FiltersContainer>
                <ButtonWrapper ref={ref}>
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
                <ButtonWrapper ref={ref}>
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
            <FontAwesomeIcon icon={faArrowLeft} />
            Hi
        </MainContainer>
    );
};

export default Home;
