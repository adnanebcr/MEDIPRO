import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'


const Product = ({ product }) => {
  console.log('productid',product._id)
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/SingleFiche/${product._id}`}>
        
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
     
          <Card.Title as='div'>
         <h4 className="dark-grey-text"><strong>{product.name}  {" "}</strong></h4>
          </Card.Title>
           <Link to={`/SingleFiche/${product._id}`}>  <Button variant="success">Consulter</Button>{' '}</Link>


     
      </Card.Body>
    </Card>
  )
}

export default Product
