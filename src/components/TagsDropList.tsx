import React, {useState} from "react";
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

const StyledListItem = styled.li`
width:90%;
height:34px;
font-size:12px;
border-bottom: 1px solid #D9D9D9;
display:flex;
&:last-child {
    border:none;
}
`;

const StyledLabel = styled.label`
width:100%;
display:flex;
justify-content:space-between;
// border:1px solid orange;
padding-right:2px;
`;

const StyledLabelText = styled.p`
color: #717171;
`;

type TagsListProps = {
  tagsList?: any[];
  checkedTags:any;
  handleCheckboxChange: any;
};

const TagsList = ({ tagsList = [], checkedTags, handleCheckboxChange }: TagsListProps) => {



  return (
    <StyledList>
      {tagsList.map((el) =>
        <StyledListItem key={el.id}>
          <StyledLabel>
            <StyledLabelText>{el.name}</StyledLabelText>
            <input type='checkbox' value={el.name} checked={!!checkedTags[el.id]} onChange={(e) => handleCheckboxChange (e, el.id)} />
          </StyledLabel>
        </StyledListItem>)}
    </StyledList>
  );
};

export default TagsList;


// selectedTags: any[];
// setSelectedTags: (tags: any[]) => void;

// selectedTags, setSelectedTags