import React from "react";
import styled from "styled-components";

const StyledTimeInput = styled.input<{nameError?:any}>`
  width: 90%;
  min-height: 44px;
  border-radius: 60px;
  border: ${(props) => props.nameError ? '1px solid red' : 'none'};
  // border: none;
  outline: none;
  text-indent: 42px;
  position: relative;
  font-size: 16px;
//   display:flex;
//   justify-content:center;

  &::placeholder {
    font-size: 16px;
    font-weight: 100;
    color: ${(props) => props.theme.inputSecondary};
  }

  &:hover {
    border: ${(props) => props.nameError ? '1px solid red' : 'none'};
    outline: none;
  }

  &:focus {
    border: ${(props) => props.nameError ? '1px solid red' : 'none'};
    outline: none;
  }
`;

type TimeInputProps = {
  nameError:any;
    type: string;
    value?: string;
    min?: string;
    onChange?:any;
    children?: React.ReactNode;
};

const TimeInput = ({nameError, type, value, min, onChange, children }: TimeInputProps) => {
    return (
        <StyledTimeInput nameError={nameError} type={type} value={value} min={min} onChange={onChange}>{children}</StyledTimeInput>
    );
};

export default TimeInput;