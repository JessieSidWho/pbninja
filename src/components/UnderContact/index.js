import React from 'react';
import './underContact.css';
import S3 from '../../images/s1.jpg';
import S4 from '../../images/s2.jpg';
import T1 from '../../images/t1.jpg';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';

const UnderContact = () => {

    return (
        <div className='row justify-content-md-center'>
            <div className='col-md-9'>
                <div className='row'>

                    <div className='col-md-2 text-center'>
                        <Flip delay='500'>
                            <img id='t3' className=' p-1' src={T1} alt='' />
                        </Flip>
                    </div>

                    <div className='col-md-5'>
                        <Zoom left>
                            <img className='w-100 p-1 pt-5' src={S3} alt='' />
                        </Zoom>
                    </div>

                    <div className='col-md-5'>
                        <Zoom right>
                            <img className='w-100 p-1 pt-5' src={S4} alt='' />
                        </Zoom>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default UnderContact;