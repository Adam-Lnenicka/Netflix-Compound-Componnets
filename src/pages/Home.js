import React, { useEffect } from "react";
import JumbotronContainer from "../components/containers/JumbotronContainer";
import useMovieAPI from "../components/MovieAPI";

const Home = () => {
  const { movies, loadMovies } = useMovieAPI();

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <div>
      <JumbotronContainer movies={movies} />
    </div>
  );
};

export default Home;
