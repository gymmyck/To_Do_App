import { useTheme } from "styled-components";

const NoTodoLogo = (props) => {
    // const theme = useTheme();

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="svg-icon" style={{ width: '6em', height: '6em', verticalAlign: 'middle', fill: `${(props) => props.theme.textMain}`, overflow: 'hidden', marginTop: '80px' }} viewBox="0 0 1024 1024" version="1.1">
                <path d="M607.232 896a32 32 0 1 1 0 64H192a96 96 0 0 1-96-96V160a96 96 0 0 1 96-96h544a96 96 0 0 1 96 96 32 32 0 0 1-64 0 32 32 0 0 0-32-32H192a32 32 0 0 0-32 32v704a32 32 0 0 0 32 32h415.232zM832 585.76v146.656c0 42.656-64 42.656-64 0V585.76c0-42.688 64-42.688 64 0z" />
                <path d="M288 320a32 32 0 1 1 0-64h224a32 32 0 0 1 0 64H288z m0 160a32 32 0 0 1 0-64h128a32 32 0 0 1 0 64H288z m351.424 446.592a32 32 0 1 1-64 0L576 800a96 96 0 0 1 96-96l127.744 1.152a32 32 0 1 1 0 64L672 768a32 32 0 0 0-32 32l-0.576 126.592z" />
                <path d="M637.92 947.648a32 32 0 1 1-44.32-46.208l180.384-172.992a32 32 0 1 1 44.288 46.176L637.92 947.648z m242.976-613.12a31.424 31.424 0 0 0 3.328-44.416l-0.416-0.512a32 32 0 0 0-44.896-3.36L408.32 652.288l-15.2 51.84 58.336-4.544 429.44-365.056z m51.616-86.4a95.36 95.36 0 0 1-9.408 134.496l-438.08 372.448a32 32 0 0 1-18.24 7.52l-114.944 8.896a32 32 0 0 1-33.184-40.928L349.6 625.088a32 32 0 0 1 9.984-15.36l437.824-372.224a96 96 0 0 1 134.688 10.112l0.416 0.512z" />
            </svg>
            <p style={{color:`${(props) => props.theme.textMain}`, fontSize:'28px', fontWeight:'800'}}>No todos found</p>
        </>
    );
};

export default NoTodoLogo;
