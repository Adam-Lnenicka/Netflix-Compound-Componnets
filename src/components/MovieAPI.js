import React, { useState, useEffect } from "react";

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
      hi
      {movies.map((movie) => (
        <div key={movie.id}>{movie.title}</div>
      ))}
    </div>
  );
};

export default MovieAPI;
