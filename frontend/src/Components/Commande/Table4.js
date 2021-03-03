import React, { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import  {listProducts4} from '../../Actions/listActions' 
import '../../App.css'
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";





const ProductsPage = () => {
  const dispatch = useDispatch()
    const productList4= useSelector(state=>state.commandList4)
    const {products}=productList4
    useEffect(() => {
      dispatch(listProducts4())
    }, [dispatch])
 

    return (
        <div id="Products">
           
            <h2 className="h1-responsive font-weight-bold text-center my-2">

                    Liste 2
                </h2>

                <h4 className="h1-responsive font-weight-bold text-center my-2">12% de remise après marché liste 1</h4>
 <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              
              <th>Designation</th>
              <th>PPH</th>
              <th>PPC</th>
              <th>Colisage</th>
              <th>Quantité</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.designation}</td>
                <td>
                 {product.PPH}
                </td>
                <td>
                 {product.PPC}
                </td>
                <td>
                 {product.Colisage}
                </td>
                <td>
                 <input type='Number'></input>
                </td>
                <td>
                
                    <Button variant='primary' className='btn-sm'>
                      Valider
                    </Button>
                
                 
                  
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
             <>
         
        </>
        </div>
    )
}

export default ProductsPage
