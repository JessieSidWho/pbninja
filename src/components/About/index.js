import React from 'react';
import './about.css';
import Boxes from '../../images/package.jpg';
import Props from '../../images/props.png';
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';
import Bounce from 'react-reveal/Bounce';

const About = () => {
    return (
        <div id='about' className='row justify-content-md-center mx-auto pt-5' style={{ zIndex: '5' }}>
            <div id='' className='col-md-12 mx-auto mt-5 mb-5 rounded-lg'>
                <Bounce delay='500' top>
                <h1 className='text-center' style={{ fontFamily: 'Comfortaa', fontSize: '50px' }}>What we Offer</h1>
                </Bounce>
                <div className='row justify-content-md-center'>

                    <div className='col-md-8 mx-auto pl-5 pr-5 pb-5 pt-3' style={{ fontSize: '20px' }} >
                        <Rotate delay='700' bottom right>
                        <p style={{ fontSize: '30px' }}>
                            Are You Ready For Your Closeup?
                        </p>
                        </Rotate>
                        <Rotate delay='1000' botton right>
                        <p>
                            Photo booths have become an ever-growing part of events, weddings, parties, and conferences offering guests and hosts the chance to have fun and instantly share and have personal souvenirs.
                       </p>
                       </Rotate>
                       <Rotate delay='1000' botton right>
                        <p>
                            With a high quality camera, professional lighting, and a range of fun backgrounds and props, you'll end up with photographic quality 4x6 and/or 2x6 prints with exciting layouts customized especially for your event.
                            <Rotate delay='2500' top left>
                            <img className='' src={Props} alt='Booth Props' align='right' />     
                            </Rotate>                      
                        </p>
                        </Rotate>
                        <Rotate delay='1000' botton right>
                        <p>
                            We also have an integrated touchscreen that allows users to email and text from the event.
                       </p>
                        </Rotate>
                        <Rotate delay='1000' botton right>
                        <p>
                            No unnecessary cramping or squishing. Smiles fun and plenty of memories!  With our Open Air Photo Fun Booth, you can fit your group of friends and family into images without feeling confined in a small space. Practice your poses now and book today!
                       </p>
                        </Rotate>
                        <Zoom delay='1000' bottom>
                        <div className='text-center mt-4'>
                            <img className='pt-5' src={Boxes} alt='placeholder' height='100%' width='100%' />
                        </div>
                        </Zoom>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default About;