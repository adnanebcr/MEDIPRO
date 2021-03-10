import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../Assets/caroussel/img1.jpg";
import img2 from "../Assets/caroussel/img2.jpg";
import img3 from "../Assets/caroussel/img3.jpg";

const Caroussel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Caroussel;
