import React, { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import {Breadcrumb,Container,Card} from 'react-bootstrap'
import {listProductDetails} from '../Actions/productActions'


 
const SingleProduct = ({ match }) => {
    const dispatch =useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const {product}= productDetails
  

  

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
                <img src={product.fiche} alt={product.name}></img>
              </Card>
            </Container>
        </div>
    )
}

export default SingleProduct
