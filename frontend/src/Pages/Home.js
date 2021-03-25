import React from "react";
import Hero from "../Components/Home/Hero";
import TopProducts from "../Components/Home/topProducts";

import certificat from "../Assets/img/certificat.jpg";
import FirstSection from "../Components/HomeFirstSection";
const Home = () => {
  return (
    <div>
      <Hero />
      <TopProducts />
      <FirstSection />

      <div className="text-center">
        <img className="Homeimg" src={certificat} alt="certificat"></img>
      </div>
    </div>
  );
};

export default Home;
