import React from 'react'
import { Row, Spinner } from 'react-bootstrap'
import AdminAllProductsCard from './AdminAllProductsCard'

const AdminAllProducts = ({products}) => {
    return (
        <div>
            <div className='admin-content-text'>ادارة جميع المنتجات</div>
            <Row className='justify-content-start'>
            {
                products.length >=1 ? (products.map((item,index)=>{
                    return(
                        <AdminAllProductsCard index={item.id} item={item} />
                    )
                })) : <Spinner animation="border" variant="primary" />
            }
                
            </Row>
            
        </div>
    )
}

export default AdminAllProducts
