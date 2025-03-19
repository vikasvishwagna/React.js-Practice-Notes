import React from 'react';
import './contact.css'


function Contact() {
  return (
    <div className='contact-container'>
      <h1 className='main-title'>Get in Touch</h1>
      <p className='contact-description'>
        Have any questions or feedback? Feel free to reach out to us.
      </p>

      {/* Contact Form */}
      <form className='contact-form'>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input type='text' id='name' placeholder='Enter your name' required />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input type='email' id='email' placeholder='Enter your email' required />
        </div>

        <div className='form-group'>
          <label htmlFor='message'>Message</label>
          <textarea id='message' placeholder='Write your message here...' rows='4' required></textarea>
        </div>

        <button type='submit' className='submit-btn'>Send Message</button>
      </form>

      {/* Contact Information */}
      <div className='contact-info'>
        <p><strong>Email:</strong> support@example.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Address:</strong> 123 Street, Hyderabad, India</p>
      </div>

      {/* Social Media Links */}
      <div className='social-links'>
        <a href='#a' target='_blank' rel='noopener noreferrer'>Facebook</a>
        <a href='#b' target='_blank' rel='noopener noreferrer'>Twitter</a>
        <a href='#c' target='_blank' rel='noopener noreferrer'>Instagram</a>
      </div>
    </div>
  );
}

export default Contact;
