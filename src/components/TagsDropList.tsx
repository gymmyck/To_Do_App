import {motion} from "framer-motion";
import styled from "styled-components";

const StyledList = styled(motion.ul)`
  width: 100%;
  // border: 1px solid blue;
  border-radius:14px;
  background-color: ${(props) => props.theme.inputPrimary};
  margin-top:48px;
  list-style-type: none;
  margin-left: 0px;
  padding-left:0px;
  padding-bottom:10px;
  z-index:5;
  display: flex;
  flex-direction:column;
  align-items: center;
`;

const StyledListItem = styled.li`
width:90%;
height:34px;
font-size:12px;
border-bottom: 1px solid ${(props) => props.theme.dropListBorder};
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
color:  ${(props)=> props.theme.textSecondary};
`;

type TagsListProps = {
  tagsList?: any[];
  checkedTags:any;
  handleCheckboxChange: any;
};

const TagsList = ({ tagsList = [], checkedTags, handleCheckboxChange }: TagsListProps) => {

  return (
    <StyledList
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.2,
      delay: 0,
      ease: [0, 0.71, 0.2, 1.01]
    }}
    >
      {tagsList.length ? (tagsList.map((el) =>
        <StyledListItem key={el.id}>
          <StyledLabel>
            <StyledLabelText>{el.name}</StyledLabelText>
            <input type='checkbox' value={el.name} checked={!!checkedTags[el.id]} onChange={(e) => handleCheckboxChange (e, el.id)} />
          </StyledLabel>
        </StyledListItem>)) : <StyledList>No tags</StyledList>}
    </StyledList>
  );
};

export default TagsList;