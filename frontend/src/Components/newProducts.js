// import React, { useEffect } from "react";
// import {useDispatch,useSelector} from 'react-redux'
// import  {listTopProducts} from '../Actions/productActions'
// import '../App.css'
// import Carousel from 'react-elastic-carousel';
// import { Link } from 'react-router-dom'
// import { Card } from 'react-bootstrap'
// import Product from '../Components/Product' 
// import { Button } from 'react-bootstrap'
// import { Col } from "react-bootstrap";







// const ProductsPage = () => {
//   const dispatch = useDispatch()
//     const topProducts= useSelector(state=>state.productTop)
//     const {products}=topProducts
//     console.log(products)
//     useEffect(() => {
//       dispatch(listTopProducts())
//     }, [dispatch])
 

//     return (
//         <div id="Products">
           
//             <h2 className="h1-responsive font-weight-bold text-center my-2">

//                     Nos Produits <span className='warning-color'>Phares</span>
//                 </h2>
//               <Carousel>
//                      {products.map((product) => (
//                         <Col key={product._id} sm={12} md={6}  xl={4}>
//                             <img id='carousel-img' className='image-responsive' src= {product.image} alt={product.name}></img>
//                         </Col>
//             ))}
     
//               </Carousel>
               
         
      
//         </div>
//     )
// }

// export default ProductsPage


import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Carousel from "react-elastic-carousel";
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import  {listNewProducts} from '../Actions/productActions'
import Item from "./Item";
import '../App.css'
import { Container } from 'react-bootstrap';

const ProductCarousel = () => {
  const dispatch = useDispatch()

  const productNewRated = useSelector((state) => state.productNew)
  const { loading, error, products } = productNewRated

  const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

  useEffect(() => {
    dispatch(listNewProducts())
  }, [dispatch])

  return (
    <>
  <div>
    <h1 className='text-center my-5'>Nos produits phares</h1>
  </div>
  {loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
     <Container fluid>
       <Carousel breakPoints={breakPoints}>
      {products.map((product) => (
       <Item><div><Link to ={`/product/${product._id}`}><img id='imgCarousel' src={product.image}alt={product.name}></img></Link>
                </div>
              
       </Item>
     
      ))}
    </Carousel>
     </Container>
  )}
  </>)

}

export default ProductCarousel
