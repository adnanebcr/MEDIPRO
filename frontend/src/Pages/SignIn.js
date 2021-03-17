import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Components/Message";
import Loader from "../Components/Loader";
import { login } from "../Actions/userActions";
import "../App.css";
import { Container, Row, Card, Col, Form, Button } from "react-bootstrap";

const SignIn = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userlogin = useSelector((state) => state.userlogin);
  const { loading, error, userInfo } = userlogin;

  const redirect = location.search
    ? location.search.split("=")[1]
    : "/FirstPage";
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div id="SigninSection">
      <Container
        style={{ height: "100%", width: "100%", paddingTop: "4rem" }}
        className="mt-5  d-flex justify-content-center align-items-center"
      >
        <Row>
          <Col className="d-flex justify-content-center align-items-center gradient">
            <Card>
              <Card.Header>
                <h2 className="h2-responsive font-weight-bold text-center">
                  ESPACE PHARMACIEN
                </h2>
              </Card.Header>
              <Card.Body>
                <h3 className="text-center ">
                  <i className="fas fa-user"></i> Connectez-vous
                </h3>
                {error && <Message variant="danger">{error}</Message>}
                {loading && <Loader />}
                <hr className="hr-light" />
                <Form onSubmit={submitHandler}>
                  <Form.Group controlId="identifiant">
                    <Form.Label>
                      <h5>Votre identifiant</h5>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="saisissez votre identifiant"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                  </Form.Group>

                  <Form.Group controlId="password">
                    <Form.Label>
                      <h5>Mot de passe</h5>{" "}
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="saisissez votre mot de passe "
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                  <div className="text-center mt-4 black-text">
                    <Button variant="primary" type="submit">
                      Se connecter{" "}
                    </Button>
                  </div>
                </Form>
                <hr className="hr-light" />
                <h5>
                  Vous n'êtes pas encore inscrits ?{" "}
                  <Link
                    to={redirect ? `/Signup?redirect=${redirect}` : "/Signup"}
                    id="signuplink"
                  >
                    Inscrivez vous !
                  </Link>
                </h5>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <h2 className="mt-5">
              <strong className="green-text2">
                Vous n'êtes pas encore inscrit ?{" "}
              </strong>
            </h2>
            <hr className="hr-light" />
            <p className="mb-4">
              Rejoignez-nous et accédez aux avantages de l’Espace Pharmaciens :
              <br />
              - Effectuez vos commandes en ligne
              <br />
              - Obtenez vos duplicatas de facture en un clic <br />- Consultez
              les tarifs et les conditions générales de vente <br />
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignIn;
