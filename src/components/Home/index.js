import React from 'react';
import './home.css';
// import Logo from './../../images/pb.jpg';
import Flip from 'react-reveal/Flip';
// import Jump from 'react-reveal/Jump';


const Home = () => {
    return (
        <>
        <Flip delay='1000' top>
            <div id='home' className='row-fluid justify-content-md-center' style={{}}>
                <div className='col-md-12 mx-auto text-center' style={{ position: 'fixed', zIndex: '-1' }}>
                    
                        {/* <img id='imgID' className='' src={Logo} alt='logo' style={{ height: '60%', width: '60%' }} /> */}
                    
                </div>
            </div>
        </Flip>

            <div id='arrow' className='row justify-content-md-center'>
                <div className='col-md-12 mx-auto text-center' style={{ position: 'fixed', zIndex: '-1' }}>
                    <div>
                        {/* <Jump delay='2000' duration='2000'>
                        <i className=" fas fa-angle-double-down"></i>
                        </Jump> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;