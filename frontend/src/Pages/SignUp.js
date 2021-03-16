import React from "react";
import { Redirect } from "react-router-dom";

import "../App.css";
import axios from "axios";

import {
  Container,
  Row,
  Card,
  Col,
  Form,
  Alert,
  Button,
} from "react-bootstrap";
import { Modal } from "react-bootstrap";

class ClassicFormPage extends React.Component {
  state = {
    collapseID: "",
    name: "",
    password: "",
    email: "",
    adress: "",
    phone: "",
    redirect: false,
    modal: false,
  };

  toggleCollapse = (collapseID) => () =>
    this.setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));

  componentDidMount() {
    document.querySelector("nav").style.height = "65px";
  }

  componentWillUnmount() {
    document.querySelector("nav").style.height = "auto";
  }
  //handle inputs
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };
  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handlePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  handleAdress = (e) => {
    this.setState({
      adress: e.target.value,
    });
  };
  handlePhone = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };
  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/SignIn" />;
    }
  };

  formSubmit = (e) => {
    e.preventDefault();

    let Data = {
      name: this.state.name,
      password: this.state.password,
      email: this.state.email,
      adress: this.state.adress,
      phone: this.state.phone,
    };
    console.log(Data);
    axios
      .post("/Signup", Data)
      .then((res) => {
        this.setState(
          {
            sent: true,
          },
          this.resetForm()
        );
      })
      .catch(() => {
        console.log("message non envoyé");
      });
  };

  //reseting initial data
  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      password: "",
      adress: "",
      phone: "",
    });
    setTimeout(() => {
      this.setState({
        sent: false,
      });
    }, 3000);
  };

  render() {
    return (
      <div id="classicformpage">
        <Container>
          <Row>
            <Col md="6" xl="5" className="mb-4">
              <Card className="mt-5">
                <Card.Header>
                  <h3 className="text-center">
                    <i className="fas fa-users"></i> Enregistrez vous
                  </h3>
                </Card.Header>
                <Card.Body>
                  <hr className="hr-light" />
                  <Form onSubmit={this.formSubmit}>
                    <Form.Group controlId="type">
                      <Form.Label>
                        <h5>Votre Nom et prénom</h5>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=" nom et prénom"
                        value={this.state.name}
                        onChange={this.handleName}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="type">
                      <Form.Label>
                        <h5>Votre Mot de passe</h5>
                      </Form.Label>
                      <Form.Control
                        type="password"
                        placeholder=" mot de passe"
                        value={this.state.password}
                        onChange={this.handlePassword}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="type">
                      <Form.Label>
                        <h5>Votre adresse mail</h5>
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder=" adresse mail"
                        value={this.state.email}
                        onChange={this.handleEmail}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="type">
                      <Form.Label>
                        <h5>Votre adresse postale</h5>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=" adresse postale"
                        value={this.state.adress}
                        onChange={this.handleAdress}
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group controlId="type">
                      <Form.Label>
                        <h5>Votre téléphone</h5>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder=" téléphone"
                        value={this.state.phone}
                        onChange={this.handlePhone}
                      ></Form.Control>
                    </Form.Group>{" "}
                    <div className="text-center">
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={this.toggle}
                      >
                        Créer un compte{" "}
                      </Button>
                      <Modal show={this.state.modal} onHide={this.state.modal}>
                        <Modal.Header closeButton>
                          <Modal.Title>Enregistrement réussi </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          Vos informations ont été transférés à notre cellule
                          commerciale pour vérification . Nous reviendrons vers
                          vous dans les plus brefs délais . Merci pour votre
                          confiance .
                        </Modal.Body>
                        <Modal.Footer>
                          {this.renderRedirect()}
                          <Button
                            variant="secondary"
                            onClick={this.setRedirect}
                          >
                            Fermer
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mt-5">
              <h1 className="h1-responsive font-weight-bold text-center">
                Inscrivez vous !{" "}
              </h1>
              <hr className="hr-light" />
              <Alert variant="success">
                <ul>
                  <li>
                    <p>
                      {" "}
                      Toutes les informations soumises seront transmises à notre
                      cellule "Action Commerciale" pour authentification.
                    </p>
                  </li>
                  <li>
                    <p>
                      Après vérification, MEDIPRO PHARMA vous remettra votre jeu
                      de connexion : code client et mot de passe.
                    </p>
                  </li>
                  <li>
                    <p>
                      MEDIPRO PHARMA s'engage à respecter la confidentialité des
                      informations personnelles renseignées et en particulier à
                      ne pas divulguer votre adresse électronique.
                    </p>
                  </li>
                </ul>
              </Alert>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ClassicFormPage;
