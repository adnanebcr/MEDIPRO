// import { useSelector } from 'react-redux'
// import React, {  useEffect } from 'react'

// const Historique = ({history}) => {

//       const userLogin = useSelector((state) => state.userlogin)
//   const { userInfo } = userLogin
// useEffect(() => {
//     if (!userInfo) {
//       history.push('/Signin')
//     }
//   })
//     return (
//         <div>
//             Historique Commandes :
//         </div>
//     )
// }

// export default Historique

import React, { useEffect } from "react";
import { Table, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Components/Message";
import Loader from "../Components/Loader";
import { getUserDetails } from "../Actions/userActions";
import { listMyOrders } from "../Actions/orderActions";
import { USER_UPDATE_PROFILE_RESET } from "../Constants/userConstants";
import { Container } from "react-bootstrap";

const ProfileScreen = ({ location, history }) => {
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

  const userLogin = useSelector((state) => state.userlogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails("profile"));
        dispatch(listMyOrders());
      } else {
        // setName(user.name)
        // setEmail(user.email)
        // setPassword(user.password)
      }
    }
  }, [dispatch, history, userInfo, user, success]);

  return (
    <Row>
      <Container fluid>
        <Col md={12}>
          <h2>My Orders</h2>
          {loadingOrders ? (
            <Loader />
          ) : errorOrders ? (
            <Message variant="danger">{errorOrders}</Message>
          ) : (
            <Table striped bordered hover responsive className="table-sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>DATE</th>
                  <th>TOTAL</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.createdAt.substring(0, 10)}</td>
                    <td>{order.totalPrice} MAD</td>

                    <td>
                      <LinkContainer to={`/order/${order._id}`}>
                        <Button className="btn-sm" variant="primary">
                          Details
                        </Button>
                      </LinkContainer>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Col>
      </Container>
    </Row>
  );
};

export default ProfileScreen;
