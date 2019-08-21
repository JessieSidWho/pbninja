import React from 'react';
import './pricing.css';

const Pricing = () => {
    return (
        <div id='price' className='row justify-content-md-center mx-auto pt-5' style={{ zIndex: '5' }}>
            <div id='priceCol' className='col-md-12 mx-auto mt-5 mb-5 rounded-lg text-center'>

                <h1 className='p-3' style={{ fontFamily: 'Comfortaa', fontSize: '50px' }}>Packages & Pricing</h1>

                <div className='row justify-content-md-center '>
                    <div className='col-md-12'>

                        <div className='row justify-content-md-center'>
                            <div className='col-md-4 mb-1 text-left border border-white rounded-lg p-2 pr-5 mx-auto'>
                                <h3 className='text-center'>Basic</h3>
                                <ul>
                                    <li>3-Hours Of Service</li>

                                    <li>Delivery, Setup, and Breakdown</li>

                                    <li>Unlimited Prints (your choice of 4x6 and/or 2x6)</li>

                                    <li>Premium Sequins Backdrop</li>

                                    <li>Custom Print Design Template</li>

                                    <li>Fun Party Props</li>

                                    <li>On-Site Booth Attendant</li>

                                    <li>Social Media Integration</li>

                                    <li>USB - Thumbdrive of original & booth photos of entire event</li>
                                </ul>
                            </div>

                            <div className='col-md-4 mb-1 text-left border border-white rounded-lg p-2 pr-5 mx-auto'>
                                <h3 className='text-center'>Standard</h3>
                                <ul>
                                    <li>5-Hours Of Service</li>

                                    <li>Delivery, Setup, and Breakdown</li>

                                    <li>Unlimited Prints (your choice of 4x6 and/or 2x6)</li>

                                    <li>Premium Sequins Backdrop</li>

                                    <li>Custom Print Design Template</li>

                                    <li>Fun Party Props</li>

                                    <li>On-Site Booth Attendant</li>

                                    <li>Social Media Integration</li>

                                    <li>Guestbook/Scrapbook for guests to write a personal message for you to keep</li>

                                    <li>USB - Thumbdrive of original & booth photos of entire event</li>
                                </ul>

                            </div>

                            <div className='col-md-4 mb-1 text-left border border-white rounded-lg p-2 pr-5 mx-auto'>
                                <h3 className='text-center'>Premium</h3>
                                <ul>
                                    <li>7-Hours Of Service</li>

                                    <li>Delivery, Setup, and Breakdown</li>

                                    <li>Unlimited Prints (your choice of 4x6 and/or 2x6)</li>

                                    <li>Premium Sequins Backdrop</li>

                                    <li>Custom Print Design Template</li>

                                    <li>Fun Party Props</li>

                                    <li>On-Site Booth Attendant</li>

                                    <li>Social Media Integration</li>

                                    <li>Gif Enabled Photos</li>

                                    <li>Guestbook/Scrapbook for guests to write a personal message for you to keep</li>

                                    <li>USB - Thumbdrive of original & booth photos of entire event</li>
                                </ul>

                            </div>



                        </div>

                        <div className='row justify-content-md-center'>
                            <div className='col-md-5 text-center'>
                            <a href="mailto:thephotoboothninja@gmail.com" target="_top"><button className='btn btn-danger btn-block  rounded-lg mt-3 mb-3 pl-5 pr-5'><i className="far fa-envelope"></i> Contact Us</button></a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Pricing;