import React from "react";
import { Container } from "reactstrap";
import Header from "./components/Header";
import Introduction from "./components/Introduction";

interface Props {}

const HomePage = (props: Props) => {
  return (
    <>
      <Header />
      <Container>
        <Introduction />
      </Container>
    </>
  );
};

export default HomePage;
