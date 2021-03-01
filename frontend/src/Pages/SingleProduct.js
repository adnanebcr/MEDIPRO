import React, { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import {Row,Col,Image,ListGroup,Breadcrumb,Container,Card,Button} from 'react-bootstrap'
import {listProductDetails} from '../Actions/productActions'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { Tab } from "react-bootstrap";
import { Nav } from "react-bootstrap";

 
const SingleProduct = ({ match }) => {
    const dispatch =useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const {loading,error,product}= productDetails
  

  

    useEffect(() => {
      dispatch(listProductDetails(match.params.id))
    }, [dispatch , match])


 
    return (
        <div>
            <Breadcrumb>
  <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
  <Breadcrumb.Item href="/Products/">
    Produits
  </Breadcrumb.Item>
  <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
</Breadcrumb>
            <Container>
              <Card>
                <Row>
                  <Col md={7}><Image src={product.image} alt={product.name} fluid /></Col>
                   <Col md={5} className='text-center my-3'>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>{product.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>Gamme : {product.gammes}</ListGroup.Item>
                <ListGroup.Item>
                  Description: {product.description}
                </ListGroup.Item>
              </ListGroup>
              </Col>
          
                </Row>
                <Row>
                  <Col lg={12}>
                     <div className='descriptionarea mb-5'>
                 <Tab.Container defaultActiveKey="Proprietes">
              <Row>
                <Col sm={3}>

                  <Nav variant="tabs"  className="flex-column">

                    <Nav.Item>
                      <Nav.Link eventKey="Proprietes" className='nav' ><h5>Propriétés</h5></Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="Conseil" className='nav'><h5>Conseils d'utilisation</h5></Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="Precautions" className='nav'><h5>Précautions</h5> </Nav.Link>
                    </Nav.Item>

                  </Nav>

                </Col>
                <Col sm={9}>
                  <Tab.Content>

                    <Tab.Pane eventKey="Proprietes">
                    <h2 className="green-text text-left product-title">Propriétés :</h2>
                      <p>{product.proprietes}</p>
                    </Tab.Pane>

                    <Tab.Pane eventKey="Conseil">
                    <h2 className="green-text text-left product-title">Conseils d'utilisation :</h2>
                    <p>{product.conseil}</p>                    
                    </Tab.Pane>

                    <Tab.Pane eventKey="Precautions">
                    <h2 className="green-text text-left product-title">Précautions :</h2>
                    <p>{product.precautions}</p>                     
                    </Tab.Pane>

                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
            </div>
                  </Col>
                </Row>
              </Card>
            </Container>
        </div>
    )
}

export default SingleProduct
