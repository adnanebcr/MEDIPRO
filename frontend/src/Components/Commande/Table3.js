import React, { useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'
import  {listProducts3} from '../../Actions/listActions'
import '../../App.css'
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";
import TableTest from './TableTest'






const ProductsPage = () => {
  const dispatch = useDispatch()
    const productList3= useSelector(state=>state.commandList3)
    const {products}=productList3
    useEffect(() => {
      dispatch(listProducts3())
    }, [dispatch])
 

    return (
        <div id="Products">
           
            <h2 className="h1-responsive font-weight-bold text-center my-2">

                    Liste 1
                </h2>

                <h4 className="h1-responsive font-weight-bold text-center my-2">

&gt;= 120 UN --&gt; 20%   |  &gt;= 100 UN --&gt; 16%   |     &gt;= 80 UN --&gt; 12%                </h4>
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
