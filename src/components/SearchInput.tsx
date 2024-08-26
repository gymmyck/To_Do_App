import React from "react";
import styled from "styled-components";

const StyledSearchInput = styled.input`
  width: 398px;
  height: 60px;
  border-radius:60px;
  border: 1px solid #E2E2E2;
`;

type SearchInputProps = {
    placeholder: string;
}

const SearchInput = ({placeholder} : SearchInputProps) => {
  return <StyledSearchInput placeholder={placeholder}/>;
};

export default SearchInput;
