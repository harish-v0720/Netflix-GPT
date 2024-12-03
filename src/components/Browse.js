import React from "react";
import Header from "./Header.js";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import MainCointainer from "./MainCointainer.js";
import SecondaryContainer from "./SecondaryContainer.js";
import usePopularMovies from "../hooks/usePopularMovies.js";
import GptSearch from "./GptPage.js";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainCointainer />
          <SecondaryContainer />
        </>
      )}

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
