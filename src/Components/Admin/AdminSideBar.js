import React from 'react'
import { Link } from 'react-router-dom'

const AdminSideBar = () => {
    var user =""
    if(localStorage.getItem("userinfo") !==null)
    user = JSON.parse(localStorage.getItem("userinfo"))
    return (
        <div className="sidebar">
            <div className="d-flex flex-column">
                <Link to="/admin/allproducts" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        اداره المنتجات
                    </div>
                </Link>
                <Link to="/admin/addbrand" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        اضف ماركه
                    </div>
                </Link>

                {
                    user.permissions[0].groupId ===1 ? <Link to="/admin/addsubcategory" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        تعديل الصلاحيات
                    </div>
                </Link>: null
                }

                <Link to="/user/profile" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        البروفايل
                    </div>
                </Link>
                
            </div>
        </div>
    )
}

export default AdminSideBar
