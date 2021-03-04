import React, { useEffect,useState } from "react";
import {useDispatch,useSelector} from 'react-redux'
import  {listProducts1} from '../../Actions/listActions'
import '../../App.css'
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";





const ProductsPage = (history,match) => {
  const [qty, setQty] = useState(0)
  const dispatch = useDispatch()
    const productList1= useSelector(state=>state.commandList1)
    const {products}=productList1
    useEffect(() => {
      dispatch(listProducts1())
    }, [dispatch])

        const addToCartHandler = (index) => {
    console.log(index)
  }
 

    return (
        <div id="Products">
           
            <h2 className="h1-responsive font-weight-bold text-center my-2">

                    Liste 1
                </h2>

                <h4 className="h1-responsive font-weight-bold text-center my-2">

                    &gt;= 400 UN --&gt; 20%   |  &gt;= 300 UN --&gt; 16%   |     &gt;= 180 UN --&gt; 12%
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
                 <input type='Number' value={qty} onChange={(e) => setQty(e.target.value)}></input>
                </td>
                <td>
                  
                    <Button variant='primary' className='btn-sm' onClick={(e)=>addToCartHandler(product.designation,product.PPH,product.QTY)}>
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
