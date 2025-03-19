import React from 'react'
import './signup.css'

function Signup() {
  return (
    <div className='Signup-container'>
    
    <i class="ri-account-circle-fill"></i>
      <h1>Create account!</h1>
      <p className='discription'>Enter details to create account.</p>

      <form className='signup-form'>
        <div className='form-group'>
          <input type='email' placeholder='Enter your email'/>
        </div>

        <div className='form-group'>
          <input type='password1' placeholder='Enter password'/>
        </div>

        <div className='form-group'>
          <input type='password' placeholder='Conform password'/>
        </div>

        <button type='login' className='signup-btn'>Signup</button>

        <p>Already have an account? <a href="/login">login</a></p>
      </form>

    </div>
  )
}

export default Signup