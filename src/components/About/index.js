import React from 'react';
import './about.css';
import Boxes from '../../images/package.jpg';

const About = () => {
    return (
        <div id='about' className='row justify-content-md-center mx-auto pt-5' style={{ zIndex: '5' }}>
            <div id='' className='col-md-12 mx-auto mt-5 mb-5 rounded-lg'>
                <h1 className='text-center' style={{ fontFamily: 'Comfortaa' }}>What we Offer</h1>

                <div className='row justify-content-md-center'>

                    <div className='col-md-8 mx-auto p-5' style={{}} >
                        <p>
                            Photo booths have become an ever-growing part of events, weddings, parties, and conferences offering guests and hosts the chance to have fun and instantly share and have personal souvenirs.
                       </p>

                        <p>
                            With a high quality camera, professional lighting, and a range of fun backgrounds and props, you'll end up with photographic quality 4x6 and/or 2x6 prints with exciting layouts customized especially for your event.
                       </p>

                        <p>
                            We also have an integrated touchscreen that allows users to email and text from the event.
                       </p>

                        <p>
                            No unnecessary cramping or squishing. Smiles fun and plenty of memories!  With our Open Air Photo Fun Booth, you can fit your group of friends and family into images without feeling confined in a small space. Practice your poses now and book today!
                       </p>

                        <div className='text-center mt-4'>
                            <img className='pt-5' src={Boxes} alt='placeholder' height='100%' width='100%' />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default About;