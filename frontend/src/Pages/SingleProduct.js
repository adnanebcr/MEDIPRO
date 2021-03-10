import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Breadcrumb,
  Container,
  Card,
} from "react-bootstrap";
import { listProductDetails } from "../Actions/productActions";

import { Tab } from "react-bootstrap";
import { Nav } from "react-bootstrap";

const SingleProduct = ({ match }) => {
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
        <Breadcrumb.Item href="/Products/">Produits</Breadcrumb.Item>
        <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
      </Breadcrumb>
      <Container>
        <Card>
          <Row>
            <Col md={7}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={5} className="text-left my-3">
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h4>{product.name}</h4>
                  <p>{product.type}</p>
                </ListGroup.Item>
                <ListGroup.Item>
                  <span className="green-text1">{product.gammes}</span>
                </ListGroup.Item>
                <ListGroup.Item>{product.description}</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Card>
        <Row className="mt-5">
          <Col lg={12}>
            <div className="descriptionarea mb-5">
              <Tab.Container defaultActiveKey="Proprietes">
                <Row>
                  <Col sm={4}>
                    <Nav variant="tabs" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="Proprietes" className="nav">
                          <h5 className="green-text1">Propriétés</h5>
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="Conseil" className="nav">
                          <h5 className="green-text1">
                            Conseils d'utilisation
                          </h5>
                        </Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="Precautions" className="nav">
                          <h5 className="green-text1">Précautions</h5>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={8}>
                    <Tab.Content>
                      <Tab.Pane eventKey="Proprietes">
                        <h5 className="green-text1 text-left product-title mb-3">
                          <strong>Propriétés :</strong>
                        </h5>
                        <p>{product.proprietes}</p>
                        <p>{product.proprietes2}</p>
                        <p>{product.proprietes3}</p>
                      </Tab.Pane>

                      <Tab.Pane eventKey="Conseil">
                        <h5 className="green-text1 text-left product-title mb-3">
                          <strong>Conseils d'utilisation :</strong>
                        </h5>
                        <p>{product.conseil}</p>
                        <p>{product.conseil2}</p>
                        <p>{product.conseil3}</p>
                      </Tab.Pane>

                      <Tab.Pane eventKey="Precautions">
                        <h5 className="green-text1 text-left product-title mb-3">
                          <strong>Précautions :</strong>
                        </h5>

                        <p>{product.precautions1}</p>

                        <p>{product.precautions2}</p>

                        <p>{product.precautions3}</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SingleProduct;
