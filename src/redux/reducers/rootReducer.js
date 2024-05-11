import { combineReducers } from "redux"
import ProductsReducer from "./ProductsReducer"
import AuthReducer from "./authReducer"


export default combineReducers({
   products:ProductsReducer,
   auth:AuthReducer
})
