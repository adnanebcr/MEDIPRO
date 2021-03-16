import React from "react";
import img1 from "../Assets/img1.jpg";
import "../App.css";
import image1 from "../Assets/img/image1.jpg";
import FirstSection from "../Components/About/About2";

import { Row, Col, Container } from "react-bootstrap";

const About = () => {
  return (
    <section id="About">
      <div>
        <img id="banniere" src={img1} alt="medipro" />
      </div>
      <div>
        <h1 className="green-text text-center py-3 mt-3">Qui sommes nous </h1>
        <FirstSection />
      </div>
      <div className="mt-5">
        <Container>
          <h1 className=" green-text text-center mb-5">Nos principes </h1>
          <Row>
            <Col lg={6} sm={12}>
              {" "}
              <img className="about-img2" src={image1} alt="medipro"></img>
            </Col>
            <Col className="" lg={6} sm={12}>
              <p>
                Nos principes sont ancrés dans la culture du Groupe et peuvent
                être résumés en 5 points :
              </p>
              <ul>
                <li>
                  {" "}
                  <p>
                    Engagement permanent envers la qualité de fabrication dans
                    le respect des normes internationales en collaborant avec
                    des partenaires étrangers de renommée soigneusement
                    sélectionnés et engagés à leur tour dans nos stratégies et
                    valeurs.
                  </p>
                </li>
                <li>
                  <p>
                    Conformité de nos process (fabrication, distribution,
                    promotion) à tous les règlements en vigueur et toutes les
                    normes du secteur quelque soit la catégorie de produits.
                  </p>
                </li>
                <li>
                  <p>
                    Anticipation et innovation afin de poursuivre notre quête de
                    l’excellence et demeurer une entité respectée et crédible
                    dans ce secteur.
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    Encourager l’esprit d’équipe dans tous nos services en
                    intégrant l’avis des experts avec un objectif commun
                    préserver une chaîne de valeur complète, constante et
                    durable.
                  </p>
                </li>
                <li>
                  <p>
                    Construire un contrat de confiance avec les professionnels
                    de la santé et rester ou devenir un partenaire fiable.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default About;
