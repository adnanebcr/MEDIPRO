import React from "react";
import Hero from "../Components/Home/Hero";
import TopProducts from "../Components/Home/topProducts";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Hero />
      <Container>
        <TopProducts />
      </Container>
    </div>
  );
};

export default Home;
