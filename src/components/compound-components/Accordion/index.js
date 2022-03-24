import React, { createContext, useContext, useState } from "react";
import { shallowEqual } from "react-redux";
const ToggleContext = createContext();

export default function Accordion({ children, props }) {
  return <div {...props}>{children}</div>;
}

Accordion.Item = function AccordionItem({ children, props }) {
  const [display, setDisplay] = useState(false);

  const toggle = () => {
    setDisplay(!display);
  };
  return (
    <ToggleContext.Provider value={{ display, toggle }}>
      <Accordion {...props}>{children}</Accordion>
    </ToggleContext.Provider>
  );
};

Accordion.Question = function AccordionQuestion({ children, props }) {
  const { display, toggle } = useContext(ToggleContext);

  return (
    <div {...props} onClick={toggle}>
      {children} <div>{display ? "<<" : ">>"}</div>
    </div>
  );
};

Accordion.Answer = function AccordionAnswer({ children, props }) {
  const { display } = useContext(ToggleContext);
  return display && <div {...props}>{children}</div>;
};
