import React,{useState} from 'react'
import { Col,Card,Row, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import prod1 from '../../images/prod1.png'
import { useDispatch } from 'react-redux'
import { deleteProduct, editProduct, getAllProducts } from '../../redux/actions/ProductsAction'
import avatar from '../../images/avatar.png'

const AdminAllProductsCard = ({item}) => {
    const dispatch = useDispatch()
    
    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);
   

    const handleDelete=async()=>{
      await dispatch(deleteProduct(item.id))
      setTimeout(async()=>{
        setShowDelete(false)
        await dispatch(getAllProducts())
      },1000);
    }
     // for edit : 
     const [showEdit, setShowEdit] = useState(false);
     const handleCloseEdit = () => setShowEdit(false);
     const handleShowEdit = () => {
      setShowEdit(true) // to open edit modal
      setName('') // clear entities...prevent cashing when pagintatio is applied
      setPrice('')
      setImg('')
      // assagin entities
      setName(item.name)
      setPrice(item.price)
      setImg(item.imageUrl || avatar)
    };

     // for Entities
     const[name,setName] = useState('')
     const[price,setPrice] = useState(0)
     const[img,setImg]=useState('')// to show image in page
     const[selectedFile,setselectedFile]=useState(null)// to save image file selected
     const onChangeImage=(event)=>{
        if(event.target.files && event.target.files[0])
        {
            setImg(URL.createObjectURL(event.target.files[0]))
            setselectedFile(event.target.files[0])
        }
    }

    const onChangeName=(e)=>{
      setName(e.target.value)
    }

    const onChangePrice=(e)=>{
      setPrice(e.target.value)
    }

    const handleEdit=async()=>{
    const formData = new FormData()
    formData.append("Name",name)
    formData.append("Price",price)
    if(selectedFile !=null)
    formData.append("Image",selectedFile)
    await dispatch(editProduct(item.id,formData))
        setTimeout(async() => {
            setShowEdit(false)
        await dispatch(getAllProducts())
        }, 1000);
     }
  
    return (
        <Col xs="12" sm="6" md="5" lg="4" className="d-flex">

        <Modal show={showDelete} >
        <Modal.Header >
          <Modal.Title><div className='font'>تأكيد الحذف</div></Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className='font'>هل انت متأكد؟</p>
        </Modal.Body>

        <Modal.Footer>
          <button className='btn btn-primary' onClick={handleCloseDelete}>اغلاق</button>
          <button className='btn btn-danger'  onClick={handleDelete}>حذف</button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEdit} >
      <Modal.Header >
        <Modal.Title><div className='font'>تأكيد التعديل</div></Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p className='font'>تعديل معلومات المنتج : {item.name} </p>
        <img height="100px" width="120px" src={img}/>
        <input type='file' className="input-form d-block mt-3 px-3" onChange={onChangeImage}/>
        <input type='text'className="input-form d-block mt-3 px-3" value={name} onChange={onChangeName} />
        <input type='price'className="input-form d-block mt-3 px-3" value={price} onChange={onChangePrice}/>
      </Modal.Body>

      <Modal.Footer>
        <button className='btn btn-primary' onClick={handleCloseEdit}>اغلاق</button>
        <button className='btn btn-success'  onClick={handleEdit}>حفظ التعديل</button>
      </Modal.Footer>
    </Modal>


            <Card
                className="my-2"
                style={{
                    width: "100%",
                    height: "350px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                }}>
                <Row className="d-flex justify-content-center px-2">
                    <Col className=" d-flex justify-content-between">
                        <div onClick={handleShowDelete} className="d-inline item-delete-edit">ازاله</div>
                        <div onClick={handleShowEdit} className="d-inline item-delete-edit">تعديل</div>
                    </Col>
                </Row>
                    <Card.Img style={{ height: "228px", width: "100%" }} src={item.imageUrl || prod1} />
                    <Card.Body>
                        <Card.Title>
                            <div className="card-title">
                              {item.name || null}
                            </div>
                        </Card.Title>
                        <Card.Text>
                            <div className="d-flex justify-content-between">
                                <div className="card-rate">{item.createdDate || 0}</div>
                                <div className="d-flex">
                                    <div className="card-currency mx-1">IQD</div>
                                    <div className="card-price">{item.price || 0}</div>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
            </Card>
        </Col>
    )
}

export default AdminAllProductsCard
