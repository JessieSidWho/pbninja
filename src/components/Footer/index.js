import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './footer.css';


const Footer = () => {
    return (
        <>
            <Navbar id='footer' className='row mx-auto' collapseOnSelect fixed='bottom' expand="lg" bg="light" variant="light">
                <Navbar.Brand className='mx-auto text-center'>
                    {/* <a href='mailto:thephotoboothninja@gmail.com'><span id='logos' className=' no5' ><i className="ml-3 mr-3 far fa-envelope"></i></span></a>
                    <a href='tel:6195047147'><span id='logos' className=' no4' ><i className="ml-3 mr-3 fas fa-phone-square"></i></span></a> */}
                    <span id='logos1' className='rounded-lg no1 text-center m-0' onClick={() => window.open("https://www.instagram.com/thephotoboothninja/", "_blank")}><i className="ml-3 mr-3 fab fa-instagram"></i></span>
                    <span id='logos' className=' no2 text-center m-0' onClick={() => window.open("https://www.facebook.com/thephotoboothninja1/", "_blank")}><i className="ml-3 mr-3 fab fa-facebook-square"></i></span>
                    <span id='logos' className=' no3 text-center m-0' onClick={() => window.open("https://www.yelp.com/biz/the-photobooth-ninja-san-diego", "_blank")}><i className="ml-3 mr-3 fab fa-yelp"></i></span>
                    <p className='text-center p-0 m-0' style={{fontSize: '15px'}}>619.504.7147 | thephotoboothninja@gmail.com</p>
                    <p className='text-center p-0 m-0' style={{fontSize: '10px'}}>© 2018 THE PHOTOBOOTH NINJA</p>
                </Navbar.Brand>
            </Navbar>
        </>
    )
}

export default Footer;