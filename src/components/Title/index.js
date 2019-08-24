import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './title.css';
import Logo from '../../images/pb.jpg';


const Title = () => {
    return (
        <>
            <Navbar className='row' collapseOnSelect fixed='top' expand="lg" bg="white" variant="white">
                
                <Navbar.Toggle className='mr-auto pl-4 pr-0 rounded-lg fas fa-bars' aria-controls="responsive-navbar-nav"/>
                <Navbar.Brand className='' href="#home"><img id='navLogo' className='ml-5' src={Logo} alt='' height='55px'/></Navbar.Brand>  
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className='p-3 animated bounce delay-2s' href="#home" style={{color: 'orangered'}}>Home</Nav.Link>
                        <Nav.Link className='p-3 animated bounce delay-3s' href="#about" style={{color: 'orangered'}}>About</Nav.Link>
                        <Nav.Link className='p-3 animated bounce delay-2s' href="#gallery" style={{color: 'orangered'}}>Gallery</Nav.Link>
                        <Nav.Link className='p-3 animated bounce delay-3s' href="#price" style={{color: 'orangered'}}>Pricing</Nav.Link>
                        <Nav.Link className='p-3 animated bounce delay-2s' href="#contact" style={{color: 'orangered'}}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Title;