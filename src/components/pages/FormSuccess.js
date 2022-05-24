import React from 'react';
import { Link } from 'react-router-dom';
import './Form.css'

const FormSuccess = () => {
    return (
        // <div className='form-content-right'>
        <div className='form-container'>
            <h1 className='form-success'>
                We have received your request!
            </h1>
            <img className='form-img-2' src='images/success.svg' alt='signupsuccessful' />
            <Link to='/sign-in'>登入 Sign-in</Link>
        </div>
    )
};

export default FormSuccess;