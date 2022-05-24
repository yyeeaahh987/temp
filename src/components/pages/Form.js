import React, { useState } from 'react';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import './Form.css';

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
        <div className='form-container'>
        {/* <div> */}
            <span className='close-btn'></span>
            <div>
            {/* <div className='form-content-left'> */}
                {/* <img className='form-img' src='images/tree.png' alt='tree' /> */}
            </div>
            {!isSubmitted ? (<FormSignup submitForm=
            {submitForm} />) : (<FormSuccess />)}
            </div>
        </>
    );
};

export default Form;