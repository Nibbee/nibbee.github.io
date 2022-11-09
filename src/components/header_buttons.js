import React from 'react';
import CV from '../assets/cv.pdf';

const BTNS = () => {
    return(
        <div className='btns'>
            <a href={CV} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Contact me</a>
        </div>
    )
}


export default BTNS;