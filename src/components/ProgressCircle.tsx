import { Circle } from 'rc-progress';
import styled from "styled-components";
import { percentageCalculator } from '../utils';

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

type progressCircleProps = {
    todo: any;
}

const ProgressCircle = ({ todo}: progressCircleProps) => {
    const percentage = percentageCalculator(todo);

    return (
        <>
            <ProgressCircleContainer>
                <Circle percent={percentage} trailWidth={8} trailColor='#D3D3D3' strokeWidth={8} strokeColor="#0D99FF" />
                <p>{`${percentage}`}%</p>
            </ProgressCircleContainer>
        </>
    )
}

export default ProgressCircle;