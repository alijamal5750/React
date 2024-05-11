import React,{useState,useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import deleteicon from '../../images/delete.png'
import { useDispatch,useSelector } from 'react-redux'
import { userProfile } from '../../redux/actions/authAction'
const UserProfile = () => {

    const dispatch = useDispatch()
   
    useEffect(()=>{
        const get=async()=>{
            await dispatch(userProfile())
        }
        get()
    },[])

    const res = useSelector(state=>state.auth.userProfile)
    let data =[]
    try{
        if(res){
            data = res
        }
    }catch(e){}

    return (
        <div>
            <div className="admin-content-text">الصفحه الشخصية</div>
            <div className="user-address-card my-3 px-2">
                <Row className="">
                    <Col xs="12" className="d-flex">
                        <div className="p-2">نوع الكروب:</div>
                        <div className="p-1 item-delete-edit">{data.group ? data.group.name : ''}</div>
                    </Col>
                </Row>
                <Row className="">
                <Col xs="12" className="d-flex">
                    <div className="p-2">الحساب:</div>
                    <div className="p-1 item-delete-edit">{
                     data.isActive ? 'مفعل' : 'غير مفعل' 
                    }</div>
                </Col>
            </Row>
                <Row className="">
                    <Col xs="12" className="d-flex">
                        <div className="p-2">الايميل:</div>
                        <div className="p-1 item-delete-edit">{data.email ||''}</div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default UserProfile
