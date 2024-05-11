import {GET_ALL_PRODUCTS,CREATE_PRODUCT,DELETE_PRODUCT,EDIT_PRODUCT} from '../type'

const initail={
getAllProducts:[],
createProduct:[],
deleteProduct:[],
editProduct:[]
    }
const ProductsReducer = (state=initail,action) => {
    switch(action.type)
    {
      case GET_ALL_PRODUCTS:
      return{
          getAllProducts:action.payload,// return new array from payload(api backend)
      }

      case CREATE_PRODUCT:
      return{
          createProduct:action.payload,// return new array from payload(api backend)
      }
      
      case DELETE_PRODUCT:
      return{
          deleteProduct:action.payload,// return new array from payload(api backend)
      }

      case EDIT_PRODUCT:
        return{
            editProduct:action.payload,// return new array from payload(api backend)
        }

         default:
            return state;
}
}
export default ProductsReducer