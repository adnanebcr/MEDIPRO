import axios from 'axios'
import {CART_ADD_ITEM} from '../Constants/CartConstants'


export const addToCart = (id,qty) => async (dispatch,getState)=>{
 const {data} = await axios.get(`api/products/${id}`)

 dispatch({
     type:CART_ADD_ITEM,
     payload: data._id,
     name:data.name,
     PPH:data.PPH,
     qty
 })

 localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItmes))
}