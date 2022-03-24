import React, { useEffect } from "react";
import AccordionContainer from "../components/containers/AccordionContainer";
import JumbotronContainer from "../components/containers/JumbotronContainer";
import useMovieAPI from "../components/MovieAPI";

const Home = () => {
  const { movies, loadMovies } = useMovieAPI();

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <div>
      <AccordionContainer />
      <JumbotronContainer movies={movies} />
    </div>
  );
};

export default Home;
