import React from "react";
import Hero from "../Components/Home/Hero";
import TopProducts from "../Components/Home/topProducts";
import { Container } from "react-bootstrap";

import certificat from "../Assets/img/certificat.jpg";
import FirstSection from "../Components/HomeFirstSection";
const Home = () => {
  return (
    <div>
      <Hero />
      <FirstSection className="" />
      <Container fluid>
        <TopProducts />
      </Container>

      <div className="text-center">
        <img className="Homeimg" src={certificat} alt="certificat"></img>
      </div>
    </div>
  );
};

export default Home;
