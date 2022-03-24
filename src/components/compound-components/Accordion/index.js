import React from "react";

export default function Accordion({ children, props }) {
  return <div {...props}>{children}</div>;
}

Accordion.Question = function AccordionAnswer({ children, props }) {
  return <Accordion {...props}>{children}</Accordion>;
};

Accordion.Answer = function AccordionAnswer({ children, props }) {
  return <Accordion {...props}>{children}</Accordion>;
};
