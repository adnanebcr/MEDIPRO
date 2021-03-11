import React from "react";

import { Row, Col, Container } from "react-bootstrap";
import medipro01 from "../Assets/medipro01.jpg";

const About2 = () => {
  return (
    <div>
      <>
        <Container className=" mt-5">
          <Row>
            <Col lg={6} sm={12}>
              {" "}
              <img className="about-img" src={medipro01} alt="medipro"></img>
            </Col>
            <Col className="pt-5" lg={6} sm={12}>
              <h5 className="">
                <strong>Qui sommes nous ?</strong>
              </h5>
              <p className="Firstpara">
                {" "}
                <h2>
                  <span className="FirstTitle green-text1 ">
                    MEDIPRO PHARMA
                  </span>{" "}
                </h2>
                une société pharmaceutique, spécialisée dans le domaine de la
                santé naturelle et du complément alimentaire.
              </p>
              <p className="Firstpara">
                Grâce à une large gamme de compléments alimentaires, de
                dispositifs médicaux aux formules innovantes, prescrits et
                conseillés par les professionnels de santé, notre société s’est
                rapidement imposé comme leader sur le marché marocain des
                compléments alimentaires naturels à base de plantes.
              </p>
            </Col>
          </Row>
        </Container>
      </>
    </div>
  );
};

export default About2;
