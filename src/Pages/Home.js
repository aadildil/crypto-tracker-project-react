import React, { useContext, useEffect } from "react";
import Header from "../Components/common/Header/Header";
import MainComponent from "../Components/landingPages/MainComponent";
import watchListContext from "../context/watchListContext";

const Home = () => {
  const { globalWatchList, setGlobalWatchList } = useContext(watchListContext);

  

  return (
    <div>
      <Header />
      <MainComponent />
    </div>
  );
};
export default Home;
