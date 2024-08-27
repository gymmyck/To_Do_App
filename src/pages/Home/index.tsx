import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { InputButton, InputContainer, MainContainer } from "./styles.js";
import SearchInput from "../../components/SearchInput";

const Home: React.FC = (props) => {
  return (
    <MainContainer>
      <InputContainer>
        <SearchInput placeholder="Search..." {...props}></SearchInput>
        <InputButton></InputButton>
      </InputContainer>
      <FontAwesomeIcon icon={faArrowLeft} />
        Hi
    </MainContainer>
  );
};

export default Home;
