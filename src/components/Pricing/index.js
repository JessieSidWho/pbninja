import React from 'react';
import './pricing.css';

const Pricing = () => {
    return (
        <div id='price' className='row justify-content-md-center mx-auto pt-5' style={{ zIndex: '5' }}>
            <div id='priceCol' className='col-md-12 mx-auto mt-5 mb-5 text-center text-white'>

                <h1 className='p-3 text-dark' style={{ fontFamily: 'Comfortaa', fontSize: '50px' }}>Packages & Pricing</h1>


                <div className='row justify-content-md-center'>
                    <div id='package1' className='col-md-9 text-left mx-auto'>

                        <div className='row justify-content-md-center '>
                            <div  id='price1' className='col-md-9 text-left'>
                                <h3 className='pt-2'>$600</h3>
                            </div>
                        </div>

                        <h3 className='text-center pt-2'>BASIC</h3>
                        <ul>
                            <li>3-Hours Of Service</li>

                            <li>Delivery, Setup, and Breakdown</li>

                            <li>Unlimited Prints (your choice of 4x6 and/or 2x6)</li>

                            <li>Premium Sequins Backdrop</li>

                            <li>Custom Print Design Template</li>

                            <li>Fun Party Props</li>

                            <li>On-Site Booth Attendant</li>

                            <li>Email Integration</li>

                            <li>USB - Thumbdrive of original & booth photos of entire event</li>
                        </ul>
                        <div className='row justify-content-md-center'>
                            <div className='col-md-4 mx-auto text-center text-white'>
                            <a href="mailto:thephotoboothninja@gmail.com" className='text-white btn border border-white rounded-pill mt-3 mb-3'><i className="far fa-envelope"></i> Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row justify-content-md-center'>
                    <div id='package2' className='col-md-9 text-left mx-auto'>

                        <div className='row justify-content-md-center '>
                            <div id='price2' className='col-md-9 text-left mt-0'>
                                <h3 className='pt-2'>$800</h3>
                            </div>
                        </div>

                        <h3 className='text-center pt-2'>STANDARD</h3>
                        <ul>
                            <li>5-Hours Of Service</li>

                            <li>Delivery, Setup, and Breakdown</li>

                            <li>Unlimited Prints (your choice of 4x6 and/or 2x6)</li>

                            <li>Premium Sequins Backdrop</li>

                            <li>Custom Print Design Template</li>

                            <li>Fun Party Props</li>

                            <li>On-Site Booth Attendant</li>

                            <li>Email Integration</li>

                            <li>Guestbook/Scrapbook for guests to write a personal message for you to keep</li>

                            <li>USB - Thumbdrive of original & booth photos of entire event</li>
                        </ul>
                        <div className='row justify-content-md-center'>
                            <div className='col-md-4 mx-auto text-center text-white'>
                            <a href="mailto:thephotoboothninja@gmail.com" className='text-white btn border border-white rounded-pill mt-3 mb-3'><i className="far fa-envelope"></i> Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row justify-content-md-center'>
                    <div id='package3' className='col-md-9 text-left mx-auto'>

                        <div className='row justify-content-md-center '>
                            <div id='price3' className='col-md-9 text-left mt-0'>
                                <h3 className='pt-2'>$1000</h3>
                            </div>
                        </div>

                        <h3 className='text-center pt-2'>PREMIUM</h3>
                        <ul>
                            <li>7-Hours Of Service</li>

                            <li>Delivery, Setup, and Breakdown</li>

                            <li>Unlimited Prints (your choice of 4x6 and/or 2x6)</li>

                            <li>Premium Sequins Backdrop</li>

                            <li>Custom Print Design Template</li>

                            <li>Fun Party Props</li>

                            <li>On-Site Booth Attendant</li>

                            <li>Email Integration</li>

                            <li>Gif Enabled Photos</li>

                            <li>Guestbook/Scrapbook for guests to write a personal message for you to keep</li>

                            <li>USB - Thumbdrive of original & booth photos of entire event</li>
                        </ul>
                        <div className='row justify-content-md-center'>
                            <div className='col-md-4 mx-auto text-center text-white'>
                                <a href="mailto:thephotoboothninja@gmail.com" className='text-white btn border border-white rounded-pill mt-3 mb-3'><i className="far fa-envelope"></i> Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row justify-content-md-center'>
                    <div id='package4' className='col-md-9 text-left mx-auto'>

                        <div className='row justify-content-md-center '>
                            <div id='price4' className='col-md-9 text-left mt-0'>
                                <h3 className='pt-2'>$$$</h3>
                            </div>
                        </div>

                        <h3 className='text-center pt-2'>A LA CARTE</h3>
                        <ul>
                            <li>+ $150 GIF/Animated enabled photos</li>

                            <li>+ $200-250 Custom Wedding Backdrop</li>

                            <li>+ $2 (per duplicate prints)</li>

                            <li>+ $40 Guestbook/Scrapbook</li>

                            <li>+ $45 Video Messaging After Photos</li>

                            <li>+ $100 Additional Hour</li>
                        </ul>
                        <div className='row justify-content-md-center'>
                            <div className='col-md-4 mx-auto text-center text-white'>
                            <a href="mailto:thephotoboothninja@gmail.com" className='text-white btn border border-white rounded-pill mt-3 mb-3'><i className="far fa-envelope"></i> Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Pricing;