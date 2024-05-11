import React from 'react'
import { Navbar, Container, FormControl, Nav } from 'react-bootstrap'
import logo from '../../images/logo.png'
import login from '../../images/login.png'
import cart from '../../images/cart.png'
const NavBarLogin = () => {

    var user =""
    if(localStorage.getItem("userinfo") !==null)
    user = JSON.parse(localStorage.getItem("userinfo"))
    
    const handleLogOut=()=>{
        localStorage.removeItem("userinfo")
        window.location.href="/"
    }

    return (
        <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
            <Container>
                <Navbar.Brand>
                    <a href='/'>
                        <img src={logo} className='logo' />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {
                        user ==='' ?  <Nav className="me-auto">
                        <Nav.Link href='/login'
                            className="nav-text d-flex mt-3 justify-content-center">
                            <img src={login} className="login-img" alt="sfvs" />
                            <p style={{ color: "white" }}>دخول</p>
                        </Nav.Link>
                    </Nav> : 
                    <Nav className="me-auto">
                    <Nav.Link href='/admin/allproducts'
                            className="nav-text d-flex mt-3 justify-content-center"
                            style={{ color: "white" }}>
                            <img src={cart} className="login-img" alt="sfvs" />
                            <p style={{ color: "white" }}>لوحة آدمن</p>
                        </Nav.Link>
                    <Nav.Link 
                    onClick={handleLogOut}
                    className="nav-text d-flex mt-3 justify-content-center"
                    style={{ color: "white" }}>
                    <img src={login} className="login-img" alt="sfvs" />
                    <p style={{ color: "white" }}>تسجيل خروج</p>
                </Nav.Link>
                    </Nav> 
                    
                    }
                   
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBarLogin
