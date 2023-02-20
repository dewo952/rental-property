import React from "react";
import HeroPage from "../Components/HeroPage";
import InteriorDesign from "../Components/InteriorDesign";
import Leisure from "../Components/Leisure";
import NewHouses from "../Components/NewHouses.js";
import { useGlobalContext } from "../context";

const Home = () => {
  const { setBackgroundPages } = useGlobalContext();
  setBackgroundPages(false);
  return (
    <>
      <HeroPage />
      <NewHouses />
      <InteriorDesign />
      <Leisure />
    </>
  );
};

export default Home;
