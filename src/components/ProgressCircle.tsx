import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Line, Circle } from 'rc-progress';
import styled from "styled-components";

const ProgressCircleContainer = styled.div`
width: 60px;
height: 60px;
position: relative;
// right:30px;
// top: 104px;
padding-top:2px;

p {width:100%;
    // border: 1px solid red;
    display:flex;
    justify-content:center;
    position:absolute;
    top:7px;
    left: 0px;
}
`;

const ProgressCircle = () => {
    const value = 45;

    return (
        <>
            <ProgressCircleContainer>
                <Circle percent={70} trailWidth={8} trailColor='#D3D3D3' strokeWidth={8} strokeColor="#0D99FF" />
                <p>0%</p>
            </ProgressCircleContainer>

        </>
    )

}

export default ProgressCircle;

