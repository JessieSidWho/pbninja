import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './style.css';


const Title = () => {
    return (
        <>
            <Navbar className='row text-white' collapseOnSelect fixed='top' expand="lg" bg="dark" variant="dark">
                <Navbar.Brand className='p-1' href="#home">The PhotoBooth Ninja</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className='p-1' href="#pricing">Pricing</Nav.Link>
                        <Nav.Link className='p-1' href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Title;