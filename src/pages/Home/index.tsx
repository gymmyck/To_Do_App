import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { MainContainer } from "./styles.js";

const Home = () => {
    return (<MainContainer>
     <FontAwesomeIcon icon={faArrowLeft} />
        Hi
        </MainContainer>)    
}

export default Home;