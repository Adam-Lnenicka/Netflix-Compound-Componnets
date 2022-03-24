import React, { createContext, useContext, useState } from "react";
import { Answer, Container, Item, Question } from "./styles/Accordion";
const ToggleContext = createContext();

export default function Accordion({ children, props }) {
  return <Container {...props}>{children}</Container>;
}

Accordion.Item = function AccordionItem({ children, props }) {
  const [display, setDisplay] = useState(false);

  const toggle = () => {
    setDisplay(!display);
  };
  return (
    <ToggleContext.Provider value={{ display, toggle }}>
      <Item {...props}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Question = function AccordionQuestion({ children, props }) {
  const { display, toggle } = useContext(ToggleContext);

  return (
    <Question {...props} onClick={toggle}>
      {children} <div>{display ? "<<" : ">>"}</div>
    </Question>
  );
};

Accordion.Answer = function AccordionAnswer({ children, props }) {
  const { display } = useContext(ToggleContext);
  return display && <Answer {...props}>{children}</Answer>;
};
