import React from "react";

export default function Jumbotron({ children, props }) {
  return <div {...props}>{children}</div>;
}

Jumbotron.Item = function JumbotronItem({ children, props }) {
  return <div {...props}>{children}</div>;
};

Jumbotron.Title = function JumbotronTitle({ children, props }) {
  return <div {...props}>{children}</div>;
};

Jumbotron.Description = function JumbotronDescription({ children, props }) {
  return <div {...props}>{children}</div>;
};
