import React from 'react';
import './error.scss';

const Error = () => {
    return (
        <div className='error'>
            <div className='error__wrapper'>
                <img className='error__img'  src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Antu_dialog-error.svg/1200px-Antu_dialog-error.svg.png' alt='error'/>
                <h3>Something goes wrong. Try again later</h3>
            </div>
        </div>
    )
}

export default Error;