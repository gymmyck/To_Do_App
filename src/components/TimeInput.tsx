import React from "react";
import styled from "styled-components";

const StyledTimeInput = styled.input`
  width: 90%;
  min-height: 44px;
  border-radius: 60px;
// border: 1px solid #e2e;
  border: none;
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
    border: none;
    outline: none;
  }

  &:focus {
    border: none;
    outline: none;
  }
`;

type TimeInputProps = {
    type: string;
    value?: string;
    placeholder: string;
    children?: React.ReactNode;
};

const TimeInput = ({ type, value, placeholder, children }: TimeInputProps) => {
    return (
        <StyledTimeInput type={type} value={value} placeholder={placeholder}>{children}</StyledTimeInput>
    );
};

export default TimeInput;