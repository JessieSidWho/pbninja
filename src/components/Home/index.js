import React from 'react';
import './home.css';
import Logo from './../../images/pb.jpg';
import Flip from 'react-reveal/Flip';


const Home = () => {
    return (
        <div id='home' className='row-fluid justify-content-md-center mt-2 pt-5'>
            <div className='col-md-12 mx-auto text-center' style={{ position: 'fixed', zIndex: '-1' }}>
                <Flip delay='1000' top>
                    <img id='imgID' className='' src={Logo} alt='logo' />
                </Flip>
            </div>
        </div>
    )
}

export default Home;