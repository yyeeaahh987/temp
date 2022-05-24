import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './Form.css';

const FormSignup = ({ submitForm }) => {
    const{ handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

    return (
        // <div className='form-content-right'>
        <div>
            <form className='form' onSubmit={handleSubmit} noValidate>
            {/* <form onSubmit={handleSubmit} noValidate> */}
                <h1>SIGN UP</h1>
                <div className='form-inputs'>
                    <label className='form-label'>
                    First Name:
                    </label>
                        <input 
                        className='form-input'
                        type='text'
                        name='firstName'
                        placeholder='Enter your firstname'
                        value={values.firstName}
                        onChange={handleChange}
                        />
                        {errors.firstName && <p>{errors.firstName}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>
                    Last Name:
                    </label>
                        <input 
                        className='form-input'
                        type='text'
                        name='lastName'
                        placeholder='Enter your lastname'
                        value={values.lastName}
                        onChange={handleChange}
                        />
                        {errors.lastName && <p>{errors.lastName}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>
                    Mobile:
                    </label>
                        <input
                        className='form-input' 
                        type='text'
                        name='mobile'
                        placeholder='Enter your mobile'
                        value={values.mobile}
                        onChange={handleChange}
                        />
                        {errors.mobile && <p>{errors.mobile}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>
                    Email:
                    </label>
                        <input 
                        className='form-input'
                        type='email'
                        name='email'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={handleChange}
                        />
                        {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>
                    Password:
                    </label>
                        <input 
                        className='form-input'
                        type='password'
                        name='password'
                        placeholder='Enter your password'
                        value={values.password}
                        onChange={handleChange}
                        />
                        {errors.password && <p>{errors.password}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>
                    Confirm Password:
                    </label>
                        <input 
                        className='form-input'
                        type='password'
                        name='password2'
                        placeholder='Confirm your password'
                        value={values.password2}
                        onChange={handleChange}
                        />
                        {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>
                    User Type:
                    </label>
                    <br />
                        <input 
                        type='radio'
                        name='userType'
                        value='community'
                        onChange={handleChange}
                        defaultChecked
                        />
                        <label className='form-label'>
                        &nbsp;Community
                        </label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input 
                        type='radio'
                        name='userType'
                        value='expertise'
                        onChange={handleChange}
                        />
                        <label className='form-label'>
                        &nbsp;Expertise
                        </label>
                        <br />
                        <label className='form-label-2'>
                        ***Expertise's certificate must be upload for Admin to verify the qualification***
                        </label>
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>
                    Certificate:
                    </label>
                        <input 
                        className='form-input'
                        type='file'
                        name='certImage'
                        accept='.jpg, .jepg, .png'
                        value={values.certImage}
                        onChange={handleChange}
                        />
                </div>
                <button 
                className='form-input-btn' 
                type='submit'
                >
                    SIGN UP
                </button>
                <span className='form-input-login'>
                    Already have an account? <a href='/signin'>SIGN IN</a>
                </span>
            </form>
        </div>
    )
};

export default FormSignup;