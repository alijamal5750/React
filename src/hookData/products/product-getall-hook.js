import { useDispatch,useSelector } from "react-redux"
import { useState,useEffect } from "react";
import { getAllProducts } from "../../redux/actions/ProductsAction";

const ProductGetAllHook = () => {
  const dispatch = useDispatch();
  const[loading,setLoading] = useState(true)

  useEffect(()=>{
    const get=async()=>{
      setLoading(true)
     await dispatch(getAllProducts())
      setLoading(false)
       }
    get();
  },[])

  const onPress=async(page)=>{
    await dispatch(getAllProducts(page))
  }

  const res = useSelector(state=>state.products.getAllProducts)
  let products=[]
  let pageCount = 0
  try{
if(loading===false){
if(res){
  products = res.list
  pageCount = res.pagination.numberOfPages
}  
}
  }catch(e){}

  return[products,pageCount,onPress]
}

export default ProductGetAllHook
