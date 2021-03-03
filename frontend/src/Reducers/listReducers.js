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



export const commandListReducer1 = (state = {products :[]},action) =>{
    switch(action.type)
    {
        case COMMAND1_LIST_REQUEST: return{loading:true,products :[]}
        case COMMAND1_LIST_SUCCESS: return { loading: false,products:action.payload }
        case COMMAND1_LIST_FAIL: return { loading: false,error:action.payload }
        default:return state
    }
} 

export const commandListReducer2 = (state = {products :[]},action) =>{
    switch(action.type)
    {
        case COMMAND2_LIST_REQUEST: return{loading:true,products :[]}
        case COMMAND2_LIST_SUCCESS: return { loading: false,products:action.payload }
        case COMMAND2_LIST_FAIL: return { loading: false,error:action.payload }
        default:return state
    }
} 

export const commandListReducer3 = (state = {products :[]},action) =>{
    switch(action.type)
    {
        case COMMAND3_LIST_REQUEST: return{loading:true,products :[]}
        case COMMAND3_LIST_SUCCESS: return { loading: false,products:action.payload }
        case COMMAND3_LIST_FAIL: return { loading: false,error:action.payload }
        default:return state
    }
} 

export const commandListReducer4 = (state = {products :[]},action) =>{
    switch(action.type)
    {
        case COMMAND4_LIST_REQUEST: return{loading:true,products :[]}
        case COMMAND4_LIST_SUCCESS: return { loading: false,products:action.payload }
        case COMMAND4_LIST_FAIL: return { loading: false,error:action.payload }
        default:return state
    }
} 