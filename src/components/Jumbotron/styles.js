import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${({ direction }) => direction};
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const MovieTitle = styled.h2`
  color: blue;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
