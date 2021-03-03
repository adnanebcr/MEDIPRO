import React, { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import  {listProducts} from '../Actions/productActions'
import C1 from '../Components/Caroussel'
import '../App.css'
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { Container } from "react-bootstrap";





const ProductsPage = ({history}) => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const {  products } = productList

  



  const userLogin = useSelector(state => state.userlogin)
    const { userInfo }=userLogin
  

  

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts())
    } else {
      history.push('/SignIn')
    }

     
  }, [dispatch, history, userInfo])
 

      
    
    return (
        <div id="Fiches">
            <C1 id="Carousel"/>
            <h2 className="h1-responsive font-weight-bold text-center my-5">

                    Fiches Pharmaceutiques
                </h2>

             <>
        <Container>
            <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th></th>
              <th>Designation</th>
              <th>Patologie</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td><img src={product.image}></img></td>
                <td>{product.name} /{product.type}</td>
                <td>{product.gammes}</td>
             
                <td>
                  <LinkContainer to={`/SingleFiche/${product._id}/edit`}>
                    <Button variant='primary' className='btn-sm'>
                      Consulter
                    </Button>
                  </LinkContainer>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        </Container>
        </>
        </div>
    )
}

export default ProductsPage
