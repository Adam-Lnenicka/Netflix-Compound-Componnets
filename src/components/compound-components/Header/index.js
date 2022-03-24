import React from "react";
import { Container, Button, Content } from "./styles/Header";

export default function Header({ children, props }) {
  return <Container {...props}>{children}</Container>;
}

Header.Button = function HeaderButton({ children, props, to }) {
  return (
    <Button {...props} to={to}>
      {children}
    </Button>
  );
};

Header.Content = function HeaderContent({ children, props }) {
  return <Content {...props}>{children}</Content>;
};
