import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Components/Message";
import Loader from "../Components/Loader";
import { getUserDetails, updateUserProfile } from "../Actions/userActions";
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBContainer,
} from "mdbreact";
import { USER_UPDATE_PROFILE_RESET } from "../Constants/userConstants";

const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [ice, setIce] = useState("");
  const [tel, setTel] = useState("");
  const [adress, setAdress] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, user } = userDetails;
  console.log(user);
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;
  const userlogin = useSelector((state) => state.userlogin);
  const { userInfo } = userlogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/SignIn");
    }
    if (!user.name) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(getUserDetails("profile"));
    } else {
      setName(user.name);
      setEmail(user.email);
      setIce(user.ice);
      setAdress(user.adress);
      setTel(user.tel);
    }
  }, [dispatch, history, userInfo, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("mot de passe ne correspondent pas");
    } else {
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(
        updateUserProfile({ id: user._id, name, email, adress, password, tel })
      );
    }
  };

  return (
    <>
      <MDBContainer className="mt-5">
        <MDBCard>
          <MDBCardHeader>
            {" "}
            <h2>Votre profil</h2>
          </MDBCardHeader>
          {message && <Message variant="danger">{message}</Message>}

          {success && (
            <Message variant="success" className="text-center">
              Votre Profil est bien modifié
            </Message>
          )}
          {loading && <Loader />}
          <Form onSubmit={submitHandler}>
            <MDBCardBody>
              <Form.Group controlId="name">
                <Form.Label>Nom :</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Adresse mail :</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirmer le Mot de passe</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="ice">
                <Form.Label> ICE :</Form.Label>
                <Form.Control
                  disabled
                  type="Text"
                  value={ice}
                  onChange={(e) => setIce(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="Tel">
                <Form.Label> Téléphone :</Form.Label>
                <Form.Control
                  type="Text"
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId="adress">
                <Form.Label>Adresse :</Form.Label>
                <Form.Control
                  type="Text"
                  value={adress}
                  onChange={(e) => setAdress(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </MDBCardBody>
            <MDBCardFooter>
              <Button type="submit" variant="primary">
                Update
              </Button>
            </MDBCardFooter>
          </Form>
        </MDBCard>
      </MDBContainer>
    </>
  );
};

export default ProfileScreen;
