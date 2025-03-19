import React from 'react'
import './error.css'
import error from '../../assets/error.gif'
function Error() {
  return (
    <div className='error-container'>
      <p className='text-msg'>Page Not Found</p>
      <img src={error} alt="error" />
    </div>
  )
}

export default Error