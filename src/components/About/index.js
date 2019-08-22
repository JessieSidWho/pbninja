import React from 'react';
import './about.css';
// import Boxes from '../../images/package.jpg';
import Props from '../../images/props.png';
import Zoom from 'react-reveal/Zoom';
import Rotate from 'react-reveal/Rotate';
import Bounce from 'react-reveal/Bounce';

const About = () => {
    return (
        <div id='about' className='row justify-content-md-center mx-auto ' style={{ zIndex: '5' }}>
            <div id='' className='col-md-12 mx-auto mb-5 rounded-lg'>
                <Bounce delay='2200' top>
                    <h1 className='text-center' style={{ fontFamily: 'Comfortaa', fontSize: '50px' }}>What we Offer</h1>
                </Bounce>
                <div className='row justify-content-md-center'>
                    <div className='col-md-8 mx-auto pl-5 pr-5 ' style={{ fontSize: '20px' }} >
                        <Rotate delay='2500' bottom right>
                            <p style={{ fontSize: '30px' }}>
                                Are You Ready For Your Closeup?
                        </p>
                        </Rotate>
                        <Rotate delay='1000' botton right>
                            <p>
                                Photo booths have become an ever-growing part of events, weddings, parties, and conferences offering guests and hosts the chance to have fun and instantly share and have personal souvenirs.
                       </p>
                        </Rotate>
                        <Rotate delay='1000' botton left>
                            <p>
                                With a high quality camera, professional lighting, and a range of fun backgrounds and props, you'll end up with photographic quality 4x6 and/or 2x6 prints with exciting layouts customized especially for your event.
                            <Rotate delay='2500' top right>
                                    <img id='boothProps' className='' src={Props} alt='Booth Props' align='right' />
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
                    </div>

                </div>

                <Zoom delay='1000' bottom>
                    <div id='amenities' className='row justify-content-md-center'>
                        <div className='col-md-12 text-center'>
                            {/* <img id="gallery" className='' src={Boxes} alt='placeholder' height='80%' width='80%' /> */}
                        </div>
                    </div>
                </Zoom>

            </div>
        </div>
    )
}

export default About;