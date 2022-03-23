import React, { useState, useEffect } from "react";
import Jumbotron from "./Jumbotron/Jumbotron";

const MovieAPI = () => {
  const [movies, setMovies] = useState([]);

  const loadMovies = async () => {
    const url = "http://localhost:4000/movies";

    const response = await fetch(url);
    const data = await response.json();
    try {
      console.log(data);
      setMovies(data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <div>
      <Jumbotron>
        {movies.map((movie, index) => {
          return (
            <Jumbotron.Container>
              s
              <Jumbotron.Item
                key={movie.id}
                // direction={index % 2 === 0 ? "row" : "row-reverse"}
                direction={"row-reverse"}
              >
                <Jumbotron.Title>{movie.title}</Jumbotron.Title>
                <Jumbotron.Description>{movie.overview}</Jumbotron.Description>
                <Jumbotron.Image src={movie.poster_path} alt={movie.title} />
                {index}
              </Jumbotron.Item>
            </Jumbotron.Container>
          );
        })}
      </Jumbotron>
    </div>
  );
};

export default MovieAPI;
