import React, { useEffect } from "react";
import { Row, Col, ListGroup, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Components/Message";
import { getOrderDetails } from "../Actions/orderActions";

import { Container } from "react-bootstrap";
import { Table } from "react-bootstrap";
import Loader from "../Components/Loader";

const PlaceOrderScreen = ({ match }) => {
  const orderId = match.params.id;
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  console.log("ordeer", order);

  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, [dispatch, orderId]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <Container className="my-5">
        <h1>Votre commande est bien validée </h1>
        <h5>Commande : {order._id}</h5>

        <Card>
          <Row>
            <Col md={8}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>Produits :</h2>
                  {order.orderItems.length === 0 ? (
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
                        {order.orderItems.map((item, index) => (
                          <tr key={item._id}>
                            <td className="text-left">{item.designation}</td>
                            <td>{item.PPH}</td>

                            <td>{item.qty}</td>
                            <td>{item.qty * item.PPH} MAD</td>
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
                    <h2>Resumé</h2>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Total Produits :</Col>
                      <Col>{order.itemsPrice} MAD</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>TVA :</Col>
                      <Col>{order.taxPrice} MAD</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Total</Col>
                      <Col>{order.totalPrice} MAD</Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default PlaceOrderScreen;

//   <>
//      <Container fluid className='my-5'>
//          <h1>Votre commande est bien validée </h1>
//   <Card>
//         <Row>
//     <Col md={8}>
//       <ListGroup variant='flush'>

//         <ListGroup.Item>
//           <h2>Produits :</h2>
//           {order.orderItems.length === 0 ? (
//             <Message>Votre panier est vide !</Message>
//           ) : (
//             <Table  bordered hover responsive className='table-sm'>
//       <thead>
//         <tr>

//           <th>Designation</th>
//           <th>PPH</th>
//           <th>Quantité</th>
//           <th>Total</th>

//         </tr>
//       </thead>
//       <tbody>
//         {order.orderItems.map((item, index) => (
//           <tr key={item._id}>
//             <td className='text-left'>{item.designation}</td>
//             <td>
//              {item.PPH}
//             </td>

//             <td>
//              {item.qty}
//             </td>
//             <td>
//              {item.qty * item.PPH} MAD
//             </td>

//           </tr>
//         ))}
//       </tbody>
//     </Table>
//           )}
//         </ListGroup.Item>
//       </ListGroup>
//     </Col>
//     <Col md={4}>
//       <Card>
//         <ListGroup variant='flush'>
//           <ListGroup.Item>
//             <h2>Resumé</h2>
//           </ListGroup.Item>
//           <ListGroup.Item>
//             <Row>
//               <Col>Total Produits :</Col>
//               <Col>{order.itemsPrice} MAD</Col>
//             </Row>
//           </ListGroup.Item>
//           <ListGroup.Item>
//             <Row>
//               <Col>TVA :</Col>
//               <Col>{order.taxPrice} MAD</Col>
//             </Row>
//           </ListGroup.Item>
//           <ListGroup.Item>
//             <Row>
//               <Col>Total</Col>
//               <Col>{order.totalPrice} MAD</Col>
//             </Row>
//           </ListGroup.Item>

//         </ListGroup>
//       </Card>
//     </Col>
//   </Row>
//   </Card>
//      </Container>
//     </>
