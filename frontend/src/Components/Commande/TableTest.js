import React,{useEffect,useState } from 'react'
import {Button} from 'react-bootstrap'

const TableTest = ({product}) => {
     const [qty, setQty] = useState(0)
     console.log(qty)
      const addToCartHandler = (index) => {
    console.log(index,qty)
  }
    return (
        <>
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
        </>
    )
}

export default TableTest
