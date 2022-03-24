import React from "react";
import Accordion from "../compound-components/Accordion";
import FAQS from "../../faqs.json";

const AccordionContainer = () => {
  return (
    <Accordion>
      {FAQS.map((data) => (
        <Accordion.Item>
          <Accordion.Question>{data.header}</Accordion.Question>
          <Accordion.Answer>{data.body}</Accordion.Answer>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default AccordionContainer;
