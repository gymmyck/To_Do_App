import React from "react";
import styled from "styled-components";

const StyledSearchInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 60px;
    // border: 1px solid #e2e2e2;
  border: none;
  outline: none;
  text-indent: 42px;
    position: relative;
  font-size: 16px;
  background-color: ${(props) => props.theme.inputPrimary};

  &::placeholder {
    font-size: 16px;
    font-weight: 100;
    color: ${(props) => props.theme.inputSecondary};
  }

  &:hover {
    border: none;
    outline: none;
  }

  &:focus {
    border: none;
    outline: none;
  }
`;

type SearchInputProps = {
    type: string;
    value?: string;
    placeholder: string;
    onChange:any;
    children?: React.ReactNode;
};

const SearchInput = ({ type, value, onChange, placeholder, children }: SearchInputProps) => {
    return (
        <StyledSearchInput type={type} placeholder={placeholder} value={value} onChange={onChange}>{children}</StyledSearchInput>
    );
};

export default SearchInput;
