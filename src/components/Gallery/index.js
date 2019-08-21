import React from 'react';
import './gallery.css';
import Carousel from 'react-bootstrap/Carousel';
import pic1 from '../../images/g1.jpg';
import pic2 from '../../images/g2.jpg';
import pic3 from '../../images/g3.jpg';
import pic4 from '../../images/g4.jpg';
import pic5 from '../../images/g5.jpg';
import pic6 from '../../images/g6.jpg';
import pic7 from '../../images/g7.jpg';
import pic8 from '../../images/g8.jpg';
import pic9 from '../../images/g9.jpg';
import pic10 from '../../images/g10.jpg';
import pic11 from '../../images/g11.jpg';
import pic12 from '../../images/g12.jpg';
import pic13 from '../../images/g13.jpg';
import pic14 from '../../images/g14.jpg';
import pic15 from '../../images/g15.jpg';

const Gallery = () => {
    return (
        <div id='gallery' className='row justify-content-md-center'>
            <div className='col-md-12'>

            <div id='cCol' className='row justify-content-md-center'>

                <Carousel id='carousel' className='col-md-6'>
                    <Carousel.Item id='items'>
                      <img
                        id='images'
                        className="d-block w-100"
                        src={pic1}
                        alt=""
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={pic2}
                        alt=""
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={pic3}
                        alt=""
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={pic4}
                        alt=""
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={pic5}
                        alt=""
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={pic6}
                        alt=""
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={pic7}
                        alt=""
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={pic8}
                        alt=""
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={pic9}
                        alt=""
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={pic10}
                        alt=""
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={pic11}
                        alt=""
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={pic12}
                        alt=""
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={pic13}
                        alt=""
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={pic14}
                        alt=""
                      />
                    </Carousel.Item>

                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src={pic15}
                        alt=""
                      />
                    </Carousel.Item>

                </Carousel>
            
                </div>

            </div>
        </div>
    )
}

export default Gallery;