import React from "react";
import { Image, MovieTitle, Container } from "./styles";

export default function Jumbotron({ children, props }) {
  return <div {...props}>{children}</div>;
}

Jumbotron.Container = function JumbotronContainer({ children, props }) {
  return <div {...props}>{children}</div>;
};

Jumbotron.Item = function JumbotronItem({ children, props, direction }) {
  return (
    <Container direction={direction} {...props}>
      {children}
    </Container>
  );
};

Jumbotron.Title = function JumbotronTitle({ children, props }) {
  return <MovieTitle {...props}>{children}</MovieTitle>;
};

Jumbotron.Description = function JumbotronDescription({ children, props }) {
  return <div {...props}>{children}</div>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};
