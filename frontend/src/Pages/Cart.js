import React, { useEffect } from "react";
import { Button, Row, Col, ListGroup, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Components/Message";
import { createOrder } from "../Actions/orderActions";
import { ORDER_CREATE_RESET } from "../Constants/orderConstants";
import { USER_DETAILS_RESET } from "../Constants/userConstants";
import { Container } from "react-bootstrap";
import { Table } from "react-bootstrap";
import axios from "axios";

const PlaceOrderScreen = ({ history }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const user = useSelector((state) => state.userlogin);

  //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.PPH * item.qty, 0)
  );

  cart.taxPrice = addDecimals(Number((0.2 * cart.itemsPrice).toFixed(2)));
  cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.taxPrice)).toFixed(
    2
  );

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
      dispatch({ type: USER_DETAILS_RESET });
      dispatch({ type: ORDER_CREATE_RESET });
    }
    // eslint-disable-next-line
  }, [history, success]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        itemsPrice: cart.itemsPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    );
    let Data = {
      clientname: user.userInfo.name,
      mail: user.userInfo.email,
      items: cart.cartItems,
      itemsPrice: cart.itemsPrice,
      taxPrice: cart.taxPrice,
      totalPrice: cart.totalPrice,
    };
    axios
      .post("/Cart", Data)
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

  return (
    <>
      <Container fluid className="my-5">
        <Row>
          <Col md={8}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Informations</h2>
                <p>
                  <strong>Nom et prénom:</strong> {user.userInfo.name}
                </p>
                <p>
                  <strong>adresse postale : </strong>
                  {user.userInfo.adress}
                </p>
                <p>
                  <strong>adresse mail : </strong>
                  {user.userInfo.email}
                </p>
                <p>
                  <strong>Telephone : </strong>
                  {user.userInfo.tel}
                </p>

                <p>
                  <strong>ICE : </strong>
                  {user.userInfo.ICE}
                </p>
              </ListGroup.Item>

              <ListGroup.Item>
                <h2>Order Items</h2>
                {cart.cartItems.length === 0 ? (
                  <Message>Votre panier est vide !</Message>
                ) : (
                  <Table bordered hover responsive className="table-sm">
                    <thead>
                      <tr>
                        <th>Designation</th>
                        <th>PPH</th>
                        <th>Quantité</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.cartItems.map((item, index) => (
                        <tr key={item._id}>
                          <td className="text-left">{item.designation}</td>
                          <td>{item.PPH}</td>

                          <td>{item.qty}</td>
                          <td>{(item.qty * item.PPH).toFixed(2)} MAD</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>Order Summary</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Total Produits :</Col>
                    <Col>{cart.itemsPrice} MAD</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>TVA :</Col>
                    <Col>{cart.taxPrice} MAD</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Total</Col>
                    <Col>{cart.totalPrice} MAD</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  {error && <Message variant="danger">{error}</Message>}
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    type="button"
                    variant="success"
                    className="btn-block"
                    disabled={cart.cartItems === 0}
                    onClick={placeOrderHandler}
                  >
                    Valider la commande
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PlaceOrderScreen;
