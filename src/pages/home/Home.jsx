import React, { useState } from "react";
import { HomeContainer, HomeImg } from "./Home.style";
import Header from "../../components/header/Header";

const Home = () => {
  
  const [query, setQuery] = useState("")
  const [selectType, setSelectType] = useState("all")

  return (
    <HomeContainer>
      <Header setQuery={setQuery} setSelectType={selectType} />
      <HomeImg></HomeImg>
    </HomeContainer>
  );
};
export default Home;
