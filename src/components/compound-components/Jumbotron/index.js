import React from "react";
import { Image, MovieTitle, Item, Container } from "./styles";

export default function Jumbotron({ children, props }) {
  return <Container {...props}>{children}</Container>;
}

Jumbotron.Container = function JumbotronContainer({ children, props }) {
  return <Container {...props}>{children}</Container>;
};

Jumbotron.Item = function JumbotronItem({ children, props, direction }) {
  return (
    <Item direction={direction} {...props}>
      {children}
    </Item>
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
