import React,{useState,useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { loginUser } from '../../redux/actions/authAction'

const LoginPage = () => {

    const dispatch = useDispatch()
    const[loading,setLoading] = useState(true)
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const handleLogin=async()=>{
        if(email==='' || password==='')
        alert('رجاءاً اكمل المعلومات')
        setLoading(true)
        await dispatch(loginUser({
            Email:email,
            Password:password
        }))
        setLoading(false)
    }

    const res = useSelector(state=>state.auth.loginUser)
    useEffect(()=>{
        if(loading===false){
            if(res){
                if(res.data.errors && res.data.errors.code.statusCode === 404)
                alert('خطأ في الايميل او كلمة المرور')

                if(res.data.user){
                alert('تم تسجيل الدخول بنجاح')
                localStorage.setItem("userinfo",JSON.stringify(res.data.user))
                window.location.href="/"
                }
            }
        }
    },[loading])

    return (
            <Container style={{ minHeight: "680px" }}>
                <Row className="py-5 d-flex justify-content-center ">
                    <Col sm="12" className="d-flex flex-column ">
                        <label className="mx-auto title-login">تسجيل الدخول</label>
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
                        <button onClick={handleLogin} className="btn-login mx-auto mt-4">تسجيل الدخول</button>
                        <label className="mx-auto my-4">
                            ليس لديك حساب ؟{" "}
                            <Link to="/register" style={{textDecoration:'none'}}>
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

export default LoginPage
