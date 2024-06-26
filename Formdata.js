import React from 'react'
import {Link} from 'react-router-dom';
import {useState} from 'react';
import './Loginvalidation';



function Formdata() {
    const [values,setValues] =useState({
        email: '',
        password: ''
    } )
    const [errors,setErrors]=useState({})
    const handleInput=(event) =>{
        setValues(prev => ({...prev, [event.target.name]:[event.target.value]}))
    }

    const handleSubmit=(event) =>{
        event.preventDefault();
        setErrors(validation(values));

    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Sign-In</h2>
        <form action="" onSubmit={handleSubmit}>
        
        <div className='mb-3'>
            <label htmlFor="email"><strong>Email</strong></label>
        <input type="email" placeholder="Enter Email" name='email' 
        onChange={handleInput} className='form-control rounded-0' />
        <span>{errors.email &&  <span className='text-danger'>{errors.email}</span>}</span>
        
        </div>


        <div className='mb-3'>
            <label htmlFor="password"><strong>Password</strong></label>
            <input type="password" placeholder='Enter password' name='password' 
            onChange={handleInput} className='form-control rounded-0'/>
            {errors.password && <span className='text-danger'>{errors.password}</span>}
        
        </div>
        <button type="submit" className='btn btn-successs w-100 rounded-0 bg-success'><strong>Log In</strong></button>
        <p>You are agree to our terms and policies.</p>
        <Link to="/signup" className='btn btn-default border w-100 bg-light text-decoration-none'>Create Account</Link>
        
        </form>
        </div>
    </div>
  )
}

export default Formdata
