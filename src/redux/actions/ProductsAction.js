import {GET_ALL_PRODUCTS,CREATE_PRODUCT,DELETE_PRODUCT,EDIT_PRODUCT} from '../type'
import {useGetData} from '../../hooks/useGetData'
import{useInsertDataWithImage} from '../../hooks/useInsertData'
import{useDeleteData} from '../../hooks/useDeleteData'
import{useUpdatetDataWithImage} from '../../hooks/useUpdateData'

export const getAllProducts=(page=1)=> async(dispatch)=>{
    try{
        const response=await useGetData(`/api/user/GetAllProducts?PageIndex=${page}`)
        dispatch({
            type:GET_ALL_PRODUCTS,
            payload : response,
        })
    }catch(e){
        dispatch({
            type:GET_ALL_PRODUCTS, // return the array of error from backend to know everything in it
            payload : e.response,
        })
    }
}

export const createProduct=(body)=> async(dispatch)=>{
    try{
        const response=await useInsertDataWithImage(`/api/user/CreateProduct`,body)
        dispatch({
            type:CREATE_PRODUCT,
            payload : response,
        })
    }catch(e){
        dispatch({
            type:CREATE_PRODUCT, // return the array of error from backend to know everything in it
            payload : e.response,
        })
    }
}

export const deleteProduct=(id)=> async(dispatch)=>{
    try{
        const response=await useDeleteData(`/api/user/DeleteProduct/${id}`)
        dispatch({
            type:DELETE_PRODUCT,
            payload : response,
        })
    }catch(e){
        dispatch({
            type:DELETE_PRODUCT, // return the array of error from backend to know everything in it
            payload : e.response,
        })
    }
}

export const editProduct=(id,body)=> async(dispatch)=>{
    try{
        const response=await useUpdatetDataWithImage(`/api/user/EditProduct/${id}`,body)
        dispatch({
            type:EDIT_PRODUCT,
            payload : response,
        })
    }catch(e){
        dispatch({
            type:EDIT_PRODUCT, // return the array of error from backend to know everything in it
            payload : e.response,
        })
    }
}