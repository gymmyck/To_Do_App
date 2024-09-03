import React from "react";
import styled from "styled-components";

const StyledFormInput = styled.input`
  width: 100%;
  height: 60px;
  border-radius: 60px;
    // border: 1px solid #e2e2e2;
  border: none;
  outline: none;
  text-indent: 42px;
    position: relative;
  font-size: 16px;

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

type FormInputProps = {
    type: string;
    value?: string;
    placeholder: string;
    children?: React.ReactNode;
};

const FormInput = ({ type, value, placeholder, children }: FormInputProps) => {
  return (
    <StyledFormInput type={type} value={value} placeholder={placeholder}>{children}</StyledFormInput>
  );
};

export default FormInput;