import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction};
  max-width: 1100px;
  margin: 0rem auto;
  width: 100%;
  text-align: left;
`;

export const MovieTitle = styled.h2``;

export const Image = styled.img`
  max-width: 330px;
  height: auto;
`;

export const Container = styled.div`
  background-color: black;
  color: white;
  padding: 3rem;
`;
