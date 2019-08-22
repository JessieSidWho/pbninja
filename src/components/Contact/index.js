import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {

    state = {

    };

    handleChange = () => {

    }

    handleSubmit = () => {

    }


    render() {
        return (
            <div id='contact' className='row justify-content-md-center mt-3 mb-5'>
                {/* Pix/Animations */}
                <div className='col-md-2'>

                </div>

                {/* Contact Form */}
                <div className='col-md-6'>
                    <h1 className='p-3 text-dark' style={{ fontFamily: 'Comfortaa', fontSize: '50px' }}>Contact</h1>

                    <form>
                        <div className='row border border-dark'>

                            <input
                                className='col-md-6 border border-bottom-0 border-dark pt-1 pb-5'
                                name='name'
                                type='name'
                                placeholder='First & Last Name'
                            // onChange={}
                            // value={}
                            />

                            <input
                                className='col-md-6 border border-bottom-0 border-dark pt-1 pb-5'
                                name='hear'
                                type='text'
                                placeholder='How did you hear about us?'
                            // onChange={}
                            // value={}
                            />

                        </div>

                        <div className='row border border-top-0 border-dark'>

                            <input
                                className='col-md-6 border border-top-0 border-dark pt-1 pb-5'
                                name='email'
                                type='email'
                                pattern=''
                                placeholder='E-mail'
                            // onChange={}
                            // value={}
                            />

                            <input
                                className='col-md-6 border border-top-0 border-dark pt-1 pb-5'
                                name='phone'
                                type='tel'
                                placeholder='Phone Number'
                            // onChange={}
                            // value={}
                            />
                        </div>

                        <div className='row border border-top-0 border-dark'>
                            <textarea
                                className='col-md-12 border border-top-0 border-dark pt-2 pb-5'
                                name='service'
                                type='text'
                                placeholder='How can we be of service to you?'
                            // onChange={}
                            // value={}
                            />
                        </div>

                    </form>

                    <div className='row justify-content-md-center'>
                        <div className='col-md-6 text-center ml-4 mt-4 mr-4'>
                            <button 
                            className='btn btn-block btn-dark rounded-pill'
                            name='submit'
                            type='submit'
                            onChange={this.handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </div>


                </div>

                {/* Pix/Animations */}
                <div className='col-md-2'>

                </div>

            </div>
        )
    }
}

export default Contact;