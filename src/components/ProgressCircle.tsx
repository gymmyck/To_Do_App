import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import styled from "styled-components";

const ProgressCircleContainer = styled.div`
width: 60px;
height: 60px;
position: absolute;
right:25px;
top: 108px;
`;

const ProgressCircle = () => {
    const value = 45;

    return (
        <>
            <ProgressCircleContainer>
            <CircularProgressbar
                value={value}
                text={`${value}%`}
                styles={buildStyles({
                    textColor: "#F96762",
                    pathColor: "#56CBF9",
                    trailColor: "#DD475B",
                    textSize: `24px`,
                })}

            />
        </ProgressCircleContainer>

        </>
    )

}

export default ProgressCircle;

