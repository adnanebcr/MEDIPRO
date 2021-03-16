import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import TopProducts from "../Components/Home/topProducts";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { withRouter } from "react-router";

const FirstPage = ({ history }) => {
  const userLogin = useSelector((state) => state.userlogin);
  const { userInfo } = userLogin;
  console.log("userInfo", userInfo);
  useEffect(() => {
    if (!userInfo) {
      history.push("/Signin");
    }
  });
  return (
    <div>
      <Container fluid>
        <Row>
          <Col xs={3} id="sidebar-wrapper">
            <Sidebar userInfo={userInfo} />
          </Col>
          <Col xs={9} id="page-content-wrapper">
            <TopProducts />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
const Dashboard = withRouter(FirstPage);
export default Dashboard;
