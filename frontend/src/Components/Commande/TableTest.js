import React,{useState } from 'react'
import {useDispatch} from 'react-redux'
import {Button} from 'react-bootstrap'
import {addToCart1} from '../../Actions/cartActions'

const TableTest = ({product}) => {
     const [qty, setQty] = useState(0)
     console.log('quantité1',qty)
     const dispatch = useDispatch()
      const addToCartHandler = (index,qty) => {
      dispatch(addToCart1(index,qty))
      console.log('quantité',qty)
      
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
                    <Button variant='primary' className='btn-sm' onClick={(e)=>addToCartHandler(product._id,qty)}>
                      Valider
                    </Button>
                </td>
                  
              </tr>
        </>
    )
}

export default TableTest
