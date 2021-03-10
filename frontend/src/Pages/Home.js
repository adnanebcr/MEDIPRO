import React from "react";
import Hero from "../Components/Home/Hero";
import TopProducts from "../Components/Home/topProducts";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Firstimg from "../Assets/img/map.png";

const Home = () => {
  return (
    <div>
      <Hero />
      <Container>
        <TopProducts />
        <Row>
          <Col lg={4} md={4} sm={12} className="ml-auto mr-auto">
            <img className="descimg" src={Firstimg} alt="firstimg"></img>
          </Col>
          <Col lg={4} md={4} sm={12} className="ml-auto mr-auto">
            <img className="descimg" src={Firstimg} alt="firstimg"></img>
          </Col>
          <Col lg={4} md={4} sm={12} className="ml-auto mr-auto">
            <img className="descimg" src={Firstimg} alt="firstimg"></img>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
