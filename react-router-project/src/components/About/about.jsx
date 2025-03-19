import React from 'react'
import './about.css'

function About() {
  return (
    
    <div className='About-container'>
      <h1>About Us</h1>
      <div className='Purpose-Mission'>
        <p>At ShopEase, our mission is to provide a seamless and enjoyable shopping experience by bringing a wide range of high-quality products to your fingertips. We aim to make online shopping effortless, secure, and accessible for everyone.</p>
      </div>

      <div className='Features-Services'>
        <ul>
          <li>A vast collection of fashion, electronics, and home essentials.</li>
          <li>Fast and reliable delivery across multiple locations.</li>
          <li>Secure payments with multiple options.</li>
          <li>Easy returns and 24/7 customer support.</li>
        </ul>
      </div>

      <div className='Company-Team'>
        <p>Founded by a team of tech and retail enthusiasts, ShopEase is committed to redefining eCommerce. Our team works tirelessly to ensure an intuitive and customer-friendly platform that meets all your shopping needs.

        Shop smart, shop easy—ShopEase! 🛍️</p>
      </div>
    </div>
  )
}

export default About