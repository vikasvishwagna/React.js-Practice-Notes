import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

function NavBar() {
  return (
    <div className='NavBar'>
      <div className='left-nav'>
        <Link to='/'>ShopEase</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      <div className='right-nav'>
        <Link to='/signup'>Sign-up</Link>
        <Link to='/login'>Log-In</Link>
      </div>
    </div>
  )
}

export default NavBar