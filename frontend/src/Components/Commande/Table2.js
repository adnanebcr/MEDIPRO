import React, { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import  {listProducts2} from '../../Actions/listActions' 
import '../../App.css'
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import TableTest from './TableTest'





const ProductsPage = () => {
  const dispatch = useDispatch()
    const productList2= useSelector(state=>state.commandList2)
    const {products}=productList2
    useEffect(() => {
      dispatch(listProducts2())
    }, [dispatch])
 

    return (
        <div id="Products">
           
            <h2 className="h1-responsive font-weight-bold text-center my-2">

                    Liste 2
                </h2>

                <h4 className="h1-responsive font-weight-bold text-center my-2">

12% de remise après marché liste 1
                </h4>
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
              <TableTest product ={product}/>
            ))}
          </tbody>
        </Table>
             <>
         
        </>
        </div>
    )
}

export default ProductsPage
