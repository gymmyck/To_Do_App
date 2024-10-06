import React from "react";
import {motion} from "framer-motion";
import styled from "styled-components";

const StyledList = styled(motion.ul)`
  width: 100%;
//   border: 1px solid blue;
  border-radius:14px;
  background-color: ${(props) => props.theme.inputPrimary};
  margin-top:48px;
  list-style-type: none;
  margin-left: 0px;
  padding-left:0px;
  z-index:5;
  display: flex;
  flex-direction:column;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
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

type SortingListProps = {
    sort: any;
    handleSortChoice: any;
};

const SortingList = ({ sort, handleSortChoice }: SortingListProps) => {
    const sortingArray = ["Default", "Ascending Date", "Descending Date", "Ascending Priority", "Descending Priority", "Ascending Complexity", "Descending Complexity"];

    return (
        <StyledList
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.2,
          delay: 0,
          ease: [0, 0.71, 0.2, 1.01]
        }}>
            {sortingArray.map((el) =>
                <StyledListItem key={el}>
                    <StyledLabel htmlFor={el}>
                        <StyledLabelText>{el}</StyledLabelText>
                        <input type='radio' name='sorting-list' value={el} id={el} checked={el===sort} onChange={handleSortChoice} />
                    </StyledLabel>
                </StyledListItem>)}
        </StyledList>
    );
};

export default SortingList;
