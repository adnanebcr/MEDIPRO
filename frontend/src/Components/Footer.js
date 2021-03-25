import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../Assets/logo-medipro.png";
import "../App.css";
import { LinkContainer } from "react-router-bootstrap";
const Footer = () => {
  return (
    <footer>
      <div className="Footer pt-3">
        <Container className="mt-2">
          <Row>
            <Col lg={4}>
              <img className="App-logo" alt="..." src={logo} />
              <p className="mt-4">
                une société pharmaceutique spécialisée dans le domaine de la
                phytothérapie, des médicaments naturels et des compléments
                alimentaires.
              </p>
            </Col>
            <Col lg={4}>
              <h5>Liens rapides</h5>
              <ul>
                <li className="my-3">
                  <LinkContainer to="/About">
                    <h6>à propos de nous</h6>
                  </LinkContainer>
                </li>
                <li className="my-3">
                  <LinkContainer to="/Products">
                    <h6>Nos produits</h6>
                  </LinkContainer>
                </li>
                <li className="my-3">
                  <LinkContainer to="/Contact">
                    <h6>Contactez nous</h6>
                  </LinkContainer>
                </li>
                <li className="my-3">
                  <LinkContainer to="/SignIn">
                    <h6> Espace Pharmacien </h6>
                  </LinkContainer>
                </li>
              </ul>
            </Col>
            <Col lg={4}>
              <h5>Contact</h5>
              <p className="mt-4">
                <i class="fas fa-map-marker-alt"></i> 100, rue Brahim Annakhai –
                Mâarif 20370 – Casablanca
              </p>
              <p>
                <i class="fas fa-phone"> 05 22 98 07 72</i>
              </p>
              <p>
                <i class="fas fa-envelope-open-text"></i> Email@Email.com
              </p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col className="text-center py-3">
              Copyright &copy; Medipro Pharma
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
