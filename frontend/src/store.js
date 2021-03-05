import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {productListReducer,productDetailsReducer,productDeleteReducer,productCreateReducer,productUpdateReducer,productTopRatedReducer} from './Reducers/productReducers'
import {userLoginReducer,userDetailsReducer, userUpdateProfileReducer,userListReducer,userDeleteReducer,userUpdateReducer,userRegisterReducer} from './Reducers/userReducers'
import {commandListReducer1,commandListReducer2,commandListReducer3,commandListReducer4} from './Reducers/listReducers'
import { cartReducer } from './Reducers/CartReducers'
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderListMyReducer,
  orderListReducer,
} from './Reducers/orderReducers'



const reducer = combineReducers({
   productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
   productList:productListReducer,
   productDetails:productDetailsReducer,
   productTop: productTopRatedReducer,
       userlogin : userLoginReducer,
    userDetails : userDetailsReducer  ,
    userUpdateProfile : userUpdateProfileReducer,
     userList: userListReducer,
       userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
    userRegister: userRegisterReducer,
    commandList1 : commandListReducer1,
    commandList2 : commandListReducer2,
    commandList3 : commandListReducer3,
    commandList4 : commandListReducer4,
    cart:cartReducer,
      orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,

  orderListMy: orderListMyReducer,
  orderList: orderListReducer,

})

// localStorage.removeItem('cartItems');

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []
const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null


const initialState = {
    userlogin: { userInfo: userInfoFromStorage },
    cart: {cartItems : cartItemsFromStorage}
}


const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
