import { COMMAND1_LIST_REQUEST,
  COMMAND1_LIST_SUCCESS,
  COMMAND1_LIST_FAIL,
  COMMAND2_LIST_REQUEST,
  COMMAND2_LIST_SUCCESS,
  COMMAND2_LIST_FAIL,
  COMMAND3_LIST_REQUEST,
  COMMAND3_LIST_SUCCESS,
  COMMAND3_LIST_FAIL,
  COMMAND4_LIST_SUCCESS,
  COMMAND4_LIST_FAIL,
  COMMAND4_LIST_REQUEST,

   } from '../Constants/listConstants'
import axios from 'axios'


export const listProducts1 =() => async(dispatch)=> {
    try {
        dispatch({ type: COMMAND1_LIST_REQUEST})

        const {data} =await axios.get('/api/productsList/List1')

        dispatch({ type: COMMAND1_LIST_SUCCESS,
        payload : data})

    } catch (error) {
        dispatch({
            type: COMMAND1_LIST_FAIL,
             payload : error.response && error.response.data.message
            ? error.response.data.message 
            : error.message
        })
        
    }
}


export const listProducts2 =() => async(dispatch)=> {
    try {
        dispatch({ type: COMMAND2_LIST_REQUEST})

        const {data} =await axios.get('/api/productsList/List2')

        dispatch({ type: COMMAND2_LIST_SUCCESS,
        payload : data})

    } catch (error) {
        dispatch({
            type: COMMAND2_LIST_FAIL,
             payload : error.response && error.response.data.message
            ? error.response.data.message 
            : error.message
        })
        
    }
}



export const listProducts3 =() => async(dispatch)=> {
    try {
        dispatch({ type: COMMAND3_LIST_REQUEST})

        const {data} =await axios.get('/api/productsList/List3')

        dispatch({ type: COMMAND3_LIST_SUCCESS,
        payload : data})

    } catch (error) {
        dispatch({
            type: COMMAND3_LIST_FAIL,
             payload : error.response && error.response.data.message
            ? error.response.data.message 
            : error.message
        })
        
    }
}



export const listProducts4 =() => async(dispatch)=> {
    try {
        dispatch({ type: COMMAND4_LIST_REQUEST})

        const {data} =await axios.get('/api/productsList/List4')

        dispatch({ type: COMMAND4_LIST_SUCCESS,
        payload : data})

    } catch (error) {
        dispatch({
            type: COMMAND4_LIST_FAIL,
             payload : error.response && error.response.data.message
            ? error.response.data.message 
            : error.message
        })
        
    }
}


