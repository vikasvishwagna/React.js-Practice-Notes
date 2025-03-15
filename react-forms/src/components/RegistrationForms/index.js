import React, { useState } from 'react'
import './index.css'

function RegistrationForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conformPassword, setConformPassword] = useState('');

  const [showSucessAlert, setShowSucessAlert] = useState(false);
  

   const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [conformPasswordError, setConformPasswordError] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault();
   
   /* validations
    1.check name has > 3 letters.
    2.check email has @ and . in it.
    3.check password has 5 letters.
    4.check conform and password are same.
    */

    setNameError(false);
    setPasswordError(false);
    setEmailError(false);
    setConformPasswordError(false);

    
    let error = false;

    if(name.length <= 3){
      setNameError(true);
      error = true
    }

    if(!email.includes('@') || !email.includes('.')){
      setEmailError(true)
      error = true
    }

    if(password.length<=4){
      setPasswordError(true);
      error = true
    }

    if(conformPassword !== password){
      setConformPasswordError(true);
      error = true
    }

    if(error === false){
      setShowSucessAlert(true);
      handleReset()
    }

    
  }

  const handleReset = ()=>{
    setName('');
    setEmail('');
    setPassword('');
    setConformPassword('')

    setNameError(false);
    setPasswordError(false);
    setEmailError(false);
    setConformPasswordError(false);
  }



  return (
    <div>
      <h1 className='title'>RegistrationForm</h1>
      <form 
      onSubmit={handleSubmit}
      
      className='form-wrapper'>

        <div>
        <div className='form-element'>
        <label>Name</label>
        <input type='text'
         placeholder='Name'
         value={name}
         onInput={(e)=> setName(e.target.value)}/> <br />
         {nameError && <span className='error-text'>Name should have 4 letters</span>}
        </div>
        </div>


        <div>
        <div className='form-element'>
        <label>Email</label>
        <input type='text' placeholder='Email' value={email} onInput={(e)=> setEmail(e.target.value)}/><br />
        {emailError && <span className='error-text'>Name should have @ && .</span>}
        </div>
        </div>
        

        <div>
        <div className='form-element'>
        <label>Password</label>
        <input type='password' placeholder='Password' value={password} onInput={(e)=>setPassword(e.target.value)}/> <br />
        {passwordError && <span className='error-text'>Name should have 5 letters</span>}
        </div>
        </div>

        <div>
        <div className='form-element'>
        <label>Conform-Password</label>

        <input type='password'
         placeholder='Conform Password'
         value={conformPassword}
         onInput={(e)=>setConformPassword(e.target.value)}/> <br />
         {conformPasswordError && <span className='error-text'>password and conformPassword should match</span>}
        </div>
        </div>
        
        <button>Submit</button>
        <button style={{margin:'0px 0px 0px 5px'}} type='button' onClick={handleReset} >Re-set</button>
      </form>

      {showSucessAlert && 
      <div id='form-sucess-alert'>
        Form is submitted sucessfully
        <span onClick={()=>setShowSucessAlert(false)}>✖</span>
      </div>}

    </div>
    
  )
}

export default RegistrationForm;