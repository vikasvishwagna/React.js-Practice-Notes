import React from 'react'
import 'remixicon/fonts/remixicon.css';
import './login.css'


function Login() {
  return (
    
    <div className='Login-container'>
    
      <i className="ri-login-circle-fill"></i>
      <h1>Welcome!</h1>
      <p className='discription'>Sign-in to your account</p>

      <form className='login-form'>
        <div className='form-group'>
          <input type='email' placeholder='Enter your email'/>
        </div>

        <div className='form-group'>
          <input type='password' placeholder='Enter Password'/>
        </div>

        {/* <p className='forget-msg-text'>Forgot password?</p> */}

        <a className='forget-msg-text' href="hh">Forgot password?</a>

        <button type='login' className='login-btn'>Login</button>

        <p>Don't have an account? <a href="/signup">signup</a></p>
      </form>

    </div>
  )
}

export default Login