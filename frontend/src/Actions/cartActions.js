import axios from 'axios'
import {CART_ADD_ITEM} from '../Constants/CartConstants'


export const addToCart1 = (id,qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/productsList/${id}`)
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      designation: data.designation,
      PPH: data.PPH,
      qty,
    },
  })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}