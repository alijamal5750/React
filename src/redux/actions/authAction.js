import {CREATE_USER,LOGIN_USER,GET_GROUPS,GET_PERMISSIONS,SAVE_PERMISSIONS,USER_PROFILE} from '../type'
import{useInsertData} from '../../hooks/useInsertData'
import {useGetData, useGetDataToken} from '../../hooks/useGetData'
import {useUpdateData} from '../../hooks/useUpdateData'

export const createUser=(body)=> async(dispatch)=>{
    try{
        const response=await useInsertData(`/api/user/InsertUser`,body)
        dispatch({
            type:CREATE_USER,
            payload : response,
        })
    }catch(e){
        dispatch({
            type:CREATE_USER, // return the array of error from backend to know everything in it
            payload : e.response,
        })
    }
}

export const loginUser=(body)=> async(dispatch)=>{
    try{
        const response=await useInsertData(`/api/user/Login`,body)
        dispatch({
            type:LOGIN_USER,
            payload : response,
        })
    }catch(e){
        dispatch({
            type:LOGIN_USER, // return the array of error from backend to know everything in it
            payload : e.response,
        })
    }
}

export const getGroups=()=> async(dispatch)=>{
    try{
        const response=await useGetData(`/api/User/Group`)
        dispatch({
            type:GET_GROUPS,
            payload : response,
        })
    }catch(e){
        dispatch({
            type:GET_GROUPS, // return the array of error from backend to know everything in it
            payload : e.response,
        })
    }
}

export const getPermissions=(groupId)=> async(dispatch)=>{
    try{
        const response=await useGetData(`/api/User/GetAllGroupPermissions/${groupId}`)
        dispatch({
            type:GET_PERMISSIONS,
            payload : response,
        })
    }catch(e){
        dispatch({
            type:GET_PERMISSIONS, // return the array of error from backend to know everything in it
            payload : e.response,
        })
    }
}

export const savePermissions=(groupId,body)=> async(dispatch)=>{
    try{
        const response=await useUpdateData(`/api/user/EditGroupPermissions/${groupId}`,body)
        dispatch({
            type:SAVE_PERMISSIONS,
            payload : response,
        })
    }catch(e){
        dispatch({
            type:SAVE_PERMISSIONS, // return the array of error from backend to know everything in it
            payload : e.response,
        })
    }
}

export const userProfile=()=> async(dispatch)=>{
    try{
        const response=await useGetDataToken(`/api/user/GetUserInfo`)
        dispatch({
            type:USER_PROFILE,
            payload : response,
        })
    }catch(e){
        dispatch({
            type:USER_PROFILE, // return the array of error from backend to know everything in it
            payload : e.response,
        })
    }
}