import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './style.css';


const Title = () => {
    return (
        <>
            <Navbar className='row' collapseOnSelect fixed='top' expand="lg" bg="white" variant="white">
                <Navbar.Brand className='' href="#home"></Navbar.Brand>
                <Navbar.Toggle className='mr-auto pl-2 rounded-lg fas fa-bars' aria-controls="responsive-navbar-nav"/>
                    
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className='p-3 ' href="#home" style={{color: 'orangered'}}>Home</Nav.Link>
                        <Nav.Link className='p-3 ' href="#about" style={{color: 'orangered'}}>About Us</Nav.Link>
                        <Nav.Link className='p-3 ' href="#pricing" style={{color: 'orangered'}}>Pricing</Nav.Link>
                        <Nav.Link className='p-3 ' href="#contact" style={{color: 'orangered'}}>Contact</Nav.Link>
                        <Nav.Link id='callUs' className='ml-2'><a href='tel:6195047147'><button id='callUs' className='text-white btn btn-primary rounded-lg'  >Call Us <i class="fas fa-phone"></i></button></a></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Title;