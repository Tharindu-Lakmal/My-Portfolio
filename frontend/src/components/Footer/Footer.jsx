import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-inner">
        <div className="footer-container">

            <div className="footer-content">
                <h1 className="footer-header">
                  Let's build somthing
                  <span>Amazing!</span>
                </h1>
            </div>

            <div className="footer-contact">
              
              <button className="footer-btn btn-light">Contact me</button>

              <div className="contact-link">
                <button className="email btn-light">tharindulakmal.k7@gmail.com</button>
                <button className="phone btn-light">
                  Find me
                  <img src={assets.whatsapp} alt="" />
                </button>
              </div>

            </div>

            <div className="social-links">
              <div className="social-links-inner">
                <p className="social-link">LinkdIn</p>
                <p className="social-link">GitHub</p>
              </div>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Footer