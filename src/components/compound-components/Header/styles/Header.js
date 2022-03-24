import styled from "styled-components";
import img from "../../../../movie.jpg";
import { Link } from "react-router-dom";
// import img from "./movie.jpg";

export const Container = styled.section`
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  height: 10rem;
  background-color: #3d3d3d;
  background-blend-mode: multiply;
  color: white;
  padding: 1rem 2rem;
`;

export const Button = styled(Link)`
  background-color: #b50000;
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  color: white;
  margin: 0.5rem;
  cursor: pointer;
  text-decoration: none;
`;

export const Content = styled.h1`
  text-align: center;
  margin-top: 2rem;
`;
