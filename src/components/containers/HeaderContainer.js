import React from "react";
import Header from "../compound-components/Header";

const HeaderContainer = () => {
  return (
    <div>
      <Header>
        <Header.Button to="/">Home</Header.Button>
        <Header.Button to="/faqs">FAQs</Header.Button>
        <Header.Content>Browse hundreds of movies with Netflix!</Header.Content>
      </Header>
    </div>
  );
};

export default HeaderContainer;
