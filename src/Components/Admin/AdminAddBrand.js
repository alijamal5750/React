import React from 'react'
import { Row,Col } from 'react-bootstrap'
import ProductAddHook from '../../hookData/products/product-add-hook'
const AdminAddBrand = () => {
    const[name,onChangeName,price,onChangePrice,img,onChangeImage,handleSubmit] = ProductAddHook();
    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">اضف ماركه جديده</div>
                <Col sm="8">
                    <div className="text-form pb-2">صوره الماركه</div>
                    <img src={img} alt="" height="100px" width="120px" />
                    <input  onChange={onChangeImage} type='file' className='input-form d-block mt-3 px-3'/>
                    <input
                        value={name}
                        onChange={onChangeName}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم الماركه"
                    />
                    <input
                        value={price}
                        onChange={onChangePrice}
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="سعر الماركه"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
        </div>
    )
}

export default AdminAddBrand
