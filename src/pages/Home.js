import React, { useEffect } from "react";
import HeaderContainer from "../components/containers/HeaderContainer";
import JumbotronContainer from "../components/containers/JumbotronContainer";
import useMovieAPI from "../components/MovieAPI";

const Home = () => {
  const { movies, loadMovies } = useMovieAPI();

  useEffect(() => {
    loadMovies();
  });

  return (
    <div>
      <HeaderContainer />
      <JumbotronContainer movies={movies} />
    </div>
  );
};

export default Home;
