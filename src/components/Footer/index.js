import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import IG from '../../images/Instagram-300x300.png';
import './footer.css';


const Footer = () => {
    return (
        <>
            <Navbar className='row justify-content-md-center' collapseOnSelect sticky='bottom' expand="lg" bg="dark" variant="dark">
                <Navbar.Brand className='' href="#home"></Navbar.Brand>
                    
                    <Nav className="mx-auto">
                            <div id='logos' className='no1'  onClick={()=> window.open("https://www.instagram.com/thephotoboothninja/", "_blank")}><i class="ml-3 mr-2"><img src={IG} alt='' style={{height: '56px'}}/></i></div>
                            <div id='logos' className='no2'  onClick={()=> window.open("https://www.facebook.com/thephotoboothninja1/", "_blank")}><i class="ml-3 mr-3 fab fa-facebook-square"></i></div>
                            <div id='logos' className='no3'  onClick={()=> window.open("https://www.yelp.com/biz/the-photobooth-ninja-san-diego", "_blank")}><i class="ml-3 mr-3 fab fa-yelp"></i></div>
                            {/* <a id='logos' href=''><i class="ml-3 mr-3 fab fa-pinterest-square"></i></a> */}
                    </Nav>
            </Navbar>
        </>
    )
}

export default Footer;