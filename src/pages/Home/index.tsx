import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { MainContainer } from "./styles.js";
import SearchInput from "../../components/SearchInput";

const Home = () => {
  return (
    <MainContainer>
        <SearchInput placeholder="Search..."></SearchInput>
      <FontAwesomeIcon icon={faArrowLeft} />
      Hi
    </MainContainer>
  );
};

export default Home;
