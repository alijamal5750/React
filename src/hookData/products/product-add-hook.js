import { useDispatch,useSelector } from "react-redux"
import { useState,useEffect } from "react";
import { createProduct } from "../../redux/actions/ProductsAction";
import avatar from '../../images/avatar.png'


const ProductAddHook = () => {
 const dispatch = useDispatch();
 const[loading,setLoading] = useState(true)
 const[name,setName] = useState('')
 const[price,setPrice] = useState(0)
 const[img,setImg]=useState(avatar)// to show image in page
 const[selectedFile,setselectedFile]=useState(null)// to save image file selected

 const onChangeName=(e)=>{
    setName(e.target.value)
 }

 const onChangePrice=(e)=>{
    setPrice(e.target.value)
 }

 const onChangeImage=(event)=>{
    if(event.target.files && event.target.files[0])
    {
        setImg(URL.createObjectURL(event.target.files[0]))
        setselectedFile(event.target.files[0])
    }
}

 const handleSubmit=async(event)=>{
    event.preventDefault();
    if(name ==='' || price===0)
    alert('رجاءاً قم بكتابة الاسم و السعر كلاهما مطلوبات')

    const fromData = new FormData();
    fromData.append("Name",name)
    fromData.append("Price",price)
    if(selectedFile !=null)
    fromData.append("Image",selectedFile)

    setLoading(true)
    await dispatch(createProduct(fromData))
    setLoading(false)
 }

 const res = useSelector(state=>state.products.createProduct)
 useEffect(()=>{
    if(loading === false){
        if(res){
            alert('تمت الاضافة بنجاح')
            setName('')
            setPrice(0)
            setImg(avatar)
            setselectedFile(null)
        }
    }
 },[loading])

 return[name,onChangeName,price,onChangePrice,img,onChangeImage,handleSubmit]

}

export default ProductAddHook
