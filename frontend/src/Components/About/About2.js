import React from "react";

import { Row, Col, Container } from "react-bootstrap";
import medipro01 from "../../Assets/medipro01.jpg";

const About2 = () => {
  return (
    <div>
      <>
        <Container>
          <Row>
            <Col lg={6} sm={12}>
              {" "}
              <img className="about-img" src={medipro01} alt="medipro"></img>
            </Col>
            <Col className="pt-5" lg={6} sm={12}>
              <p>
                Depuis plus de 21 ans,{" "}
                <span className="green-text1">MEDIPRO PHARMA </span> s’impose
                comme un leader incontesté dans le domaine de la phytothérapie,
                en donnant la priorité à l’innovation et à l’optimisation des
                normes de qualité.
              </p>
              <p>
                Les produits{" "}
                <span className="green-text1"> MEDIPRO PHARMA</span> répondent
                au besoin des professionnels de santé et des consommateurs en
                termes d’efficacité et de sécurité d’utilisation. Fidèle à son
                engagement
              </p>

              <p>
                <span className="green-text1"> MEDIPRO PHARMA</span> dessine les
                contours de la phytothérapie de demain en intégrant des domaines
                d’applications jusque-là inexplorés.
              </p>
              <p>
                <span className="green-text1"> MEDIPRO PHARMA</span> s’appuie
                sur son expertise en phytothérapie pour offrir des remèdes
                efficaces, afin de soulager les maux de tous les jours et ce
                quel que soit l’organe touché : appareil digestif, système
                respiratoire, appareil gynécologique, système ostéo-articulaire,
                métabolisme et énergie, stress, anxiété et insomnie, antisepsie
                et hygiène..
              </p>

              <p>
                <span className="green-text1"> MEDIPRO PHARMA</span> propose des
                produits concentrés en actifs naturels, apportant le meilleur de
                la nature.
              </p>
            </Col>
          </Row>
        </Container>
      </>
    </div>
  );
};

export default About2;
