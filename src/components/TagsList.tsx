import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck,
    faX
} from "@fortawesome/free-solid-svg-icons";

const TagContainer = styled.div`
min-width:50px;
height:27px;
background-color:#FFF6E8;
border-radius:60px;
font-size:12px;
display: flex;
justify-content: center;
align-items: center;
margin-top:12px;
margin-right:12px;
text-indent:10px;
padding-right:8px;
position:relative;

&::placeholder {
  font-size: 16px;
  font-weight: 100;
  color: ${(props) => props.theme.inputSecondary};
}

&:hover {
  border-color: transparent;
  outline: none;
  background-color: #ede0d422;
}

&:focus {
  border: none;
  outline: none;
}
`;

export const RemoveButton = styled.div`
width: 16px;
height: 16px;
border: 1px solid red;
border-radius: 50%;
background-color: #FF4034;
display:inline-block;
margin-left:8px;
position:relative;
`;

type Tags = {
    id: string,
    name: string,
}

const TagsList = ({ tags, removeTag, edit }: { tags: Tags[], removeTag?: any, edit?:boolean }) => {
    // const tagss = ['school', 'cooking', 'job']

    return (
        <>
            {tags && tags.map((item, index) => (
                <TagContainer key={item.id}>
                    {`${item.name}`}
                    { edit ? (
                        <RemoveButton onClick={() => removeTag(item.id)}>
                           <FontAwesomeIcon  icon={faX} style={{ color: '#000000', marginLeft: '0px', position:'absolute', right:'3px', top: '2px'}} /> 
                        </RemoveButton> ) : null
                    }
                </TagContainer>))}
        </>
    )
}

export default TagsList;