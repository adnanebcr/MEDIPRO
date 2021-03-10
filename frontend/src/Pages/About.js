import React from "react";
import img1 from "../Assets/img1.jpg";
import "../App.css";
import medipro01 from "../Assets/medipro01.jpg";
import { Row, Col, Card, Container } from "react-bootstrap";

const About = () => {
  return (
    <section id="About">
      <div>
        <img id="banniere" src={img1} alt="medipro" />
      </div>
      <div>
        <h1 className="green-text text-center py-3 mt-3">Qui sommes nous </h1>
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
      </div>
      <Container>
        <div className="mt-3 text-center">
          <h1 className=" green-text text-center py-3 mt-5">Nos principes </h1>
          <p>
            Nos principes sont ancrés dans la culture du Groupe et peuvent être
            résumés en 5 points :
          </p>
          <Row>
            <Col md={4} lg={4} xl={4} sm={12} className="ml-auto mr-auto py-5">
              <Card
                variant="success"
                className="py-4 card text-white bg-success"
              >
                <p>
                  Engagement permanent envers la qualité de fabrication dans le
                  respect des normes internationales en collaborant avec des
                  partenaires étrangers de renommée soigneusement sélectionnés
                  et engagés à leur tour dans nos stratégies et valeurs.
                </p>
              </Card>
            </Col>
            <Col md={4} lg={4} xl={4} sm={12} className="ml-auto mr-auto py-5">
              <Card
                variant="success"
                className="py-4 card text-white bg-success"
              >
                Conformité de nos process (fabrication, distribution, promotion)
                à tous les règlements en vigueur et toutes les normes du secteur
                quelque soit la catégorie de produits.
              </Card>
            </Col>
            <Col md={4} lg={4} xl={4} sm={12} className="ml-auto mr-auto py-5">
              <Card
                variant="success"
                className="py-4 card text-white bg-success"
              >
                Anticipation et innovation afin de poursuivre notre quête de
                l’excellence et demeurer une entité respectée et crédible dans
                ce secteur.
              </Card>
            </Col>
            <Col md={4} lg={4} xl={4} sm={12} className="ml-auto mr-auto py-5">
              <Card
                variant="success"
                className="py-4 card text-white bg-success"
              >
                Encourager l’esprit d’équipe dans tous nos services en intégrant
                l’avis des experts avec un objectif commun préserver une chaîne
                de valeur complète, constante et durable.
              </Card>
            </Col>
            <Col md={4} lg={4} xl={4} sm={12} className="ml-auto mr-auto py-5">
              <Card
                variant="success"
                className="py-4 card text-white bg-success"
              >
                Construire un contrat de confiance avec les professionnels de la
                santé et rester ou devenir un partenaire fiable.
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default About;
