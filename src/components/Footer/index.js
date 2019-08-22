import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './footer.css';


const Footer = () => {
    return (
        <>
            <Navbar className='row justify-content-md-center' collapseOnSelect sticky='bottom' expand="lg" bg="dark" variant="dark">
                <Navbar.Brand className='' href="#home"></Navbar.Brand>
                    
                    <Nav className="mx-auto">
                        <Nav.Link className='' style={{fontSize: '40px'}}>
                            <i class="ml-3 mr-3 fab fa-instagram"></i>
                            <i class="ml-3 mr-3 fab fa-facebook-square"></i>
                            <i class="ml-3 mr-3 fab fa-yelp"></i>
                            <i class="ml-3 mr-3 fab fa-pinterest-square"></i>
                        </Nav.Link>
                    </Nav>
            </Navbar>
        </>
    )
}

export default Footer;