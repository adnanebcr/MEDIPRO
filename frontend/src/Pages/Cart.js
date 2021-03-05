import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../Components/Message'
import { addToCart1 } from '../Actions/cartActions'


const CartScreen = () => {


  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  console.log(cartItems)


 

  return (
    <Row>
      <Col md={8}>
        <h1>Votre Commande</h1> 
        <Link to='/Commande'><Button variant='primary'>Passer une nouvelle commande</Button></Link>
        {cartItems.length === 0 ? (
          <Message>
            Votre panier est vide 
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>

                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.designation}</Link>
                  </Col>
                  <Col md={2}>{item.PPH} MAD</Col>
                  <Col md={2}>
                   {item.qty}
                  </Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                    //   onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          {/* <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>
              $
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type='button'
                className='btn-block'
                disabled={cartItems.length === 0}
                
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup> */}
        </Card>
      </Col>
    </Row>
  )
}

export default CartScreen
