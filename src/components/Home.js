import React from "react";
//bootstrap
import { Container } from "react-bootstrap";
//components
import TableComponent from "./TableComponent";
import Hero from "./Hero";

const Home = () => {
  return (
    <Container>
      <Hero />
      <TableComponent />
    </Container>
  );
};

export default Home;
