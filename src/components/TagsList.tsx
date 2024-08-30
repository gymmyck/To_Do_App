import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  width: 100%;
  height: 200px;
  border: 1px solid blue;
  margin-top:48px;
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
