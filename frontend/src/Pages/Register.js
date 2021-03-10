import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import FormContainer from "../Components/FormContainer";
import { register } from "../Actions/userActions";

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState("");
  const [adress, setAdress] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userlogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (!userInfo.isAdmin) {
      history.push("/Signin");
    }
  });

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password, tel, adress));
  };

  return (
    <FormContainer>
      <h1>Ajouter</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="tel">
          <Form.Label>Telephone</Form.Label>
          <Form.Control
            type="text"
            placeholder="telephone"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="adress">
          <Form.Label>adresse</Form.Label>
          <Form.Control
            type="text"
            placeholder="adresse"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Ajouter
        </Button>
      </Form>
    </FormContainer>
  );
};

export default RegisterScreen;
