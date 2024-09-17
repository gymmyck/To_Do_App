import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
width: 100%;
//   border: 1px solid blue;
  border-radius:14px;
  background-color: #FFFFFF;
  margin-top:48px;
  list-style-type: none;
  margin-left: 0px;
  padding-left:0px;
  z-index:5;
  display: flex;
  flex-direction:column;
  align-items: center;
`;

type TagsListProps = {
  children?: React.ReactNode;
  placeholder?: string;
};

const TagsList = ({ placeholder, children }: TagsListProps) => {
  return (
    <StyledList>ABC</StyledList>
  );
};

export default TagsList;
