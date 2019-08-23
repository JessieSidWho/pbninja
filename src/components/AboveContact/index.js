import React from 'react';
import S1 from '../../images/s1.jpg';
import S2 from '../../images/s2.jpg';
import Roll from 'react-reveal/Roll';

const AboveContact = () => {

    return (
        <div className='row justify-content-md-center'>
            <div className='col-md-4'>
                <Roll left delay='500'>
                    <img className='w-100' src={S1} alt='' />
                </Roll>
            </div>

            <div className='col-md-4'>
                <Roll right delay='500'>
                    <img className='w-100' src={S2} alt='' />
                </Roll>
            </div>
        </div>
    )

}

export default AboveContact;