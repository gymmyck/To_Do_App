import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import styled from "styled-components";

const ProgressCircleContainer = styled.div`
width: 60px;
height: 60px;
position: absolute;
right:20px;
top: 100px;
`;

const ProgressCircle = () => {
    return (
        <ProgressCircleContainer>
            
            <CircularProgressbar
            value = {30}
            text={`30`}
            styles={buildStyles({
              textColor: `#F96762`,
              pathColor: "#56CBF9",
              trailColor: "#DD475B"
            })}
       
            />
        </ProgressCircleContainer>
    )

}

export default ProgressCircle;

