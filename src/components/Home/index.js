import React from 'react';
import './home.css';
import Logo from './../../images/pb.jpg';
import Flip from 'react-reveal/Flip';


const Home = () => {
    return (
        <>
            <div id='home' className='row-fluid justify-content-md-center'>
                <div className='col-md-12 mx-auto text-center' style={{ position: 'fixed', zIndex: '-1' }}>
                    <Flip delay='1000' top>
                        <img id='imgID' className='' src={Logo} alt='logo' style={{ height: '60%', width: '60%' }} />
                    </Flip>
                </div>
            </div>

            <div id='arrow' className='row justify-content-md-center'>
                <div className='col-md-12 mx-auto text-center' style={{ position: 'fixed', zIndex: '-1' }}>
                    <div>
                        <i className="animated bounce delay-2s fas fa-angle-double-down"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;