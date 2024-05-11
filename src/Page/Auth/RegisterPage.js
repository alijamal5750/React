import React,{useState,useEffect} from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { createUser } from '../../redux/actions/authAction'

const RegisterPage = () => {

  const dispatch = useDispatch()
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const[loading,setLoading] = useState(true)

  const handleCreate=async(e)=>{
    e.preventDefault();

    setLoading(true)
    await dispatch(createUser({
      Email:email,
      Password:password
    }))
    setLoading(false)
  }

  const res = useSelector(state=>state.auth.createUser)
  useEffect(()=>{
    if(loading ===false){
      if(res){
        alert('تم اضافة اليوزر بنجاح')
        setEmail('')
        setPassword('')
      }
    }
  },[loading])

    return (
        <Container style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center hieght-search">
          <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login">تسجيل حساب جديد</label>
            <input
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="الايميل..."
              type="text"
              className="user-input my-3 text-center mx-auto"
            />
            <input
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="كلمه السر..."
              type="password"
              className="user-input text-center mx-auto"
            />
            <button onClick={handleCreate} className="btn-login mx-auto mt-4">تسجيل الحساب</button>
            <label className="mx-auto my-4">
              لديك حساب بالفعل؟{" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                <span style={{ cursor: "pointer" }} className="text-danger">
                  اضغط هنا
                </span>
              </Link>
            </label>
          </Col>
        </Row>
      </Container>
    )
}

export default RegisterPage
