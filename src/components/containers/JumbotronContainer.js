import React from "react";
import Jumbotron from "../compound-components/Jumbotron";

const JumbotronContainer = ({ movies }) => {
  return (
    <Jumbotron>
      {movies.map((movie, index) => {
        return (
          <Jumbotron.Item
            key={movie.id}
            direction={index % 2 === 0 ? "row" : "row-reverse"}
          >
            <Jumbotron.Container>
              <Jumbotron.Title>{movie.title}</Jumbotron.Title>
              <Jumbotron.Description>{movie.overview}</Jumbotron.Description>
            </Jumbotron.Container>
            <Jumbotron.Image
              src={movie.poster_path}
              alt={movie.title}
              onError={(e) =>
                (e.target.src =
                  "https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80")
              }
            />
          </Jumbotron.Item>
        );
      })}
    </Jumbotron>
  );
};

export default JumbotronContainer;
