import { useState } from "react";

const useMovieAPI = () => {
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

  return { movies, loadMovies };
};

export default useMovieAPI;
