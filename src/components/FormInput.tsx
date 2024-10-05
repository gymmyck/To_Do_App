import React from "react";
import styled from "styled-components";

const StyledFormInput = styled.input<{nameError?: any}>`
  width: 100%;
  height: 60px;
  border-radius: 60px;
    // border: 1px solid #e2e2e2;
  border: ${(props) => props.nameError ? '1px solid red' : 'transparent'};
  outline: none;
  text-indent: 42px;
    position: relative;
  font-size: 16px;
  background-color: ${(props) => props.theme.inputPrimary};
  color: ${(props)=> props.theme.textSecondary};

  &::placeholder {
    font-size: 16px;
    font-weight: 100;
    color: ${(props) => props.theme.inputSecondary};
  }

  &:hover {
    border:  ${(props) => props.nameError ? '1px solid red' : 'none'};
    outline: none;
  }

  &:focus {
    border:  ${(props) => props.nameError ? '1px solid red' : 'none'};
    outline: none;
  }
`;

type FormInputProps = {
  nameError: any;
  type: string;
  value?: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
};

const FormInput = ({ nameError, type, value, placeholder, onChange, children }: FormInputProps) => {
  return (
    <StyledFormInput nameError={nameError} type={type} value={value} placeholder={placeholder} onChange={onChange}>{children}</StyledFormInput>
  );
};

export default FormInput;