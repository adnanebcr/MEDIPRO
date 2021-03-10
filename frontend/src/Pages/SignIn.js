import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Components/Message";
import Loader from "../Components/Loader";
import { login } from "../Actions/userActions";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBAnimation,
  MDBCardHeader,
} from "mdbreact";
import "../App.css";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

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
      <MDBView>
        <MDBMask className="d-flex justify-content-center align-items-center gradient" />
        <MDBContainer
          style={{ height: "100%", width: "100%", paddingTop: "4rem" }}
          className="mt-5  d-flex justify-content-center align-items-center"
        >
          <MDBRow>
            <MDBCol md="6" xl="5" className="mb-4">
              <MDBAnimation type="fadeInLeft" delay=".3s">
                <MDBCard id="classic-card">
                  <MDBCardHeader className="white-text font-weight-bold ">
                    <h2 className="h2-responsive font-weight-bold text-center">
                      ESPACE PHARMACIEN
                    </h2>
                  </MDBCardHeader>

                  <MDBCardBody className="white-text">
                    <h3 className="text-center ">
                      <MDBIcon icon="user" /> Connectez-vous
                    </h3>
                    {error && <Message variant="danger">{error}</Message>}
                    {loading && <Loader />}
                    <hr className="hr-light" />
                    <Form onSubmit={submitHandler}>
                      <MDBInput
                        className="white-text"
                        label="Votre identifiant"
                        group
                        type="email"
                        validate
                        error="wrong"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        success="right"
                      />
                      <MDBInput
                        className="white-text"
                        label="Votre mot de passe"
                        group
                        type="password"
                        validate
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div className="text-center mt-4 black-text">
                        <Button variant="primary" type="submit">
                          Se connecter{" "}
                        </Button>

                        <hr className="hr-light" />
                        <h5 className="white-text">
                          Vous n'êtes pas encore inscrits ?{" "}
                          <Link
                            to={
                              redirect
                                ? `/Signup?redirect=${redirect}`
                                : "/Signup"
                            }
                            id="signuplink"
                          >
                            <p>Inscrivez vous ! </p>
                          </Link>
                        </h5>
                      </div>
                    </Form>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
            <MDBAnimation
              type="fadeInRight"
              delay=".3s"
              className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
            >
              <h4 className="h1-responsive font-weight-bold">
                <strong className="green-text">
                  Vous n'êtes pas encore inscrit ?{" "}
                </strong>
              </h4>
              <hr className="hr-light" />
              <p className="mb-4">
                Rejoignez-nous et accédez aux avantages de l’Espace Pharmaciens
                :
                <br />
                - Effectuez vos commandes en ligne
                <br />
                - Obtenez vos duplicatas de facture en un clic <br />- Consultez
                les tarifs et les conditions générales de vente <br />
              </p>
            </MDBAnimation>
            <MDBAnimation
              type="fadeInRight"
              delay=".3s"
              className="white-text text-center text-md-left "
            ></MDBAnimation>
          </MDBRow>
        </MDBContainer>
      </MDBView>
    </div>
  );
};

export default SignIn;
