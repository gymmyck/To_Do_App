import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import styled from "styled-components";

const ButtonsContainer = styled.div`
width:100%;

`;



const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const FormButtons = () => {
return(
<ButtonsContainer>
<input type="radio" value={'a'} />
</ButtonsContainer>
)
}

export default FormButtons;