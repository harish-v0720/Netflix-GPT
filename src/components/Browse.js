import React from "react";
import Header from "./Header.js";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import MainCointainer from "./MainCointainer.js";
import SecondaryContainer from "./SecondaryContainer.js";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainCointainer />
      <SecondaryContainer />
      {/*
        Main Container
          - Video Background
          - Video Title
        
        Secondary Container
          - MovieList * n
            - cards * n
        */}
    </div>
  );
};

export default Browse;
