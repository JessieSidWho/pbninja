import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './footer.css';


const Footer = () => {
    return (
        <>
            <Navbar className='row mx-auto' collapseOnSelect sticky='bottom' expand="lg" bg="dark" variant="dark">
                <Navbar.Brand className='mx-auto'>
                    <a href='mailto:thephotoboothninja@gmail.com'><span id='logos' className=' no5' ><i className="ml-3 mr-3 far fa-envelope"></i></span></a>
                    <a href='tel:6195047147'><span id='logos' className=' no4' ><i className="ml-3 mr-3 fas fa-phone-square"></i></span></a>
                    <span id='logos' className=' no1' onClick={() => window.open("https://www.instagram.com/thephotoboothninja/", "_blank")}><i className="ml-3 mr-3 fab fa-instagram"></i></span>
                    <span id='logos' className=' no2' onClick={() => window.open("https://www.facebook.com/thephotoboothninja1/", "_blank")}><i className="ml-3 mr-3 fab fa-facebook-square"></i></span>
                    <span id='logos' className=' no3' onClick={() => window.open("https://www.yelp.com/biz/the-photobooth-ninja-san-diego", "_blank")}><i className="ml-3 mr-3 fab fa-yelp"></i></span>
                </Navbar.Brand>
            </Navbar>
        </>
    )
}

export default Footer;