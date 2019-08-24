import React, { Component } from 'react';
import './contact.css';
import * as emailjs from 'emailjs-com';
import T2 from '../../images/t2.jpg';
import T3 from '../../images/t3.jpg';
import Slide from 'react-reveal/Slide';

class Contact extends Component {

    state = {
        name: '',
        hear: '',
        email: '',
        phone: '',
        service: ''
    };

    handleChange = event => {
        // Pull the name and value properties off of the event.target (the element which triggered the event)
        const { name, value } = event.target;

        // Set the state for the appropriate input field
        this.setState({
            [name]: value
        });
        // console.log(this.state);
    };

    handleSubmit = event => {
        event.preventDefault();

        let template_params = {
            "name": this.state.name,
            "email": this.state.email,
            "phone": this.state.phone,
            "hear": this.state.hear,
            "service": this.state.service
         }
         
         let service_id = "default_service";
         let template_id = "template_pvkoSJSW";
         let user_id = "user_8g6W8dwcvNZ7EWVlS7jMg";

         emailjs.send(service_id, template_id, template_params, user_id)
         .then((response) => {
            // console.log('SUCCESS!', response.status, response.text);
         }, (err) => {
            // console.log('FAILED...', err);
         });


        this.setState({ name: '', hear: '', email: '', phone: '', service: '' });
    }


    render() {
        return (
            <div id='contact' className='row justify-content-around mt-3 mb-5'>

                <div className='col-md-9 pb-5 mb-5'>
                    <div className='row'>


                        {/* Pix/Animations */}
                        <div className='col-md-4 pt-2'>
                            <Slide left delay='500'>
                            <img id='t2' className='w-50 p-1' src={T2} alt='' />
                            </Slide>
                            <Slide bottom delay='500'>
                            <img id='t3' className='w-50 p-1' src={T3} alt='' />
                            </Slide>
                        </div>

                        {/* Contact Form */}
                        <div id='contactForm' className='col-md-8'>
                            <h1 className='p-3 text-dark' style={{ fontFamily: 'Comfortaa', fontSize: '50px' }}>Contact</h1>

                            <form>
                                <div className='row border border-dark'>

                                    <input
                                        className='col-md-6 border border-bottom-0 border-dark pt-1 pb-5'
                                        name='name'
                                        type='name'
                                        placeholder='First & Last Name'
                                        onChange={this.handleChange}
                                        value={this.state.name}
                                    />

                                    <input
                                        className='col-md-6 border border-bottom-0 border-dark pt-1 pb-5'
                                        name='hear'
                                        type='text'
                                        placeholder='How did you hear about us?'
                                        onChange={this.handleChange}
                                        value={this.state.hear}
                                    />

                                </div>

                                <div className='row border border-top-0 border-dark'>

                                    <input
                                        className='col-md-6 border border-top-0 border-dark pt-1 pb-5'
                                        name='email'
                                        type='email'
                                        pattern=''
                                        placeholder='E-mail'
                                        onChange={this.handleChange}
                                        value={this.state.email}
                                    />

                                    <input
                                        className='col-md-6 border border-top-0 border-dark pt-1 pb-5'
                                        name='phone'
                                        type='tel'
                                        placeholder='Phone Number'
                                        onChange={this.handleChange}
                                        value={this.state.phone}
                                    />
                                </div>

                                <div className='row border border-top-0 border-dark'>
                                    <textarea
                                        className='col-md-12 border border-top-0 border-dark pt-2 pb-5'
                                        name='service'
                                        type='text'
                                        placeholder='How can we be of service to you?'
                                        onChange={this.handleChange}
                                        value={this.state.service}
                                    />
                                </div>

                            </form>

                            <div className='row justify-content-md-center'>
                                <div className='col-md-6 text-center ml-4 mt-4 mr-4'>
                                    <button
                                        className='btn btn-block btn-dark rounded-pill'
                                        name='submit'
                                        type='submit'
                                        onClick={this.handleSubmit}
                                    >
                                        Submit
                            </button>
                                </div>
                            </div>

                            <div className='row justify-content-md-center'>
                                <div className='col-md-12'>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default Contact;