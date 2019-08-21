import React from 'react';
import './home.css';
import Logo from './../../images/pb.jpg';

const Home = () => {
    return (
        <div id='home' className='row-fluid justify-content-md-center mt-2 pt-5' style={{zIndex: '-1', height: '100vh'}}>
            <div className='col-md-12 mx-auto text-center' style={{position: 'fixed', zIndex: '-1'}}>
              <img id='img' className='text-center' src={Logo} alt='logo' align='center' style={{zIndex: '-1', height: '45%', width: '45%'}}/>
            </div>
        </div>
    )
}

export default Home;