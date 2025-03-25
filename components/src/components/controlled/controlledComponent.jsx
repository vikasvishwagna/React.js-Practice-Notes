import React, { useState } from 'react'
import './controlledComponent.css'

function ControlledComponents() {

  let [values, setValues] = useState({
    fname:'',
    lname:''
  })

  const changeHandler = (e)=>{
    let {name, value} = e.target;
    setValues({
      ...values,
      [name]:value
    })
  }
  
  return (
    <div>
      <h1>Controlled Components [multiple input forms]</h1>
      <form className='form-container'>
        <input type='text' name='fname' value={values.fname} onChange={changeHandler} placeholder='First Name'/>
        <input type='text' name='lname' value={values.lname} onChange={changeHandler} placeholder='Last Name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ControlledComponents