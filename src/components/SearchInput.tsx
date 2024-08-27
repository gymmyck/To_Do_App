import React from "react";
import styled from "styled-components";

const StyledSearchInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 60px;
  border: 1px solid #e2e2e2;
  text-indent: 42px;
  position: relative;
  font-size:14px;

  &::placeholder {
    font-size: 14px;
    font-weight: 100;
    color: ${(props) => props.theme.inputSecondary};
  }
`;

type SearchInputProps = {
  children?: React.ReactNode;
  placeholder: string;
};

const SearchInput = ({ placeholder, children }: SearchInputProps) => {
  return (
    <StyledSearchInput placeholder={placeholder}>{children}</StyledSearchInput>
  );
};

export default SearchInput;
