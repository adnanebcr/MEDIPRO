import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {productListReducer,productDetailsReducer} from './Reducers/productReducers'
import {userLoginReducer,userDetailsReducer, userUpdateProfileReducer,userListReducer,userDeleteReducer,userUpdateReducer} from './Reducers/userReducers'



const reducer = combineReducers({
   productList:productListReducer,
   productDetails:productDetailsReducer,
       userlogin : userLoginReducer,
    userDetails : userDetailsReducer  ,
    userUpdateProfile : userUpdateProfileReducer,
     userList: userListReducer,
       userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
})



const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null


const initialState = {
    userlogin: { userInfo: userInfoFromStorage },
}


const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
