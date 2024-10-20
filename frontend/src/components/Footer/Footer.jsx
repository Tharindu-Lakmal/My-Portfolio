import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  
  return (
    <div className='footer'>
      <div className="footer-inner">
        <div className="footer-container">

            <div className="footer-content">
                <h1 className="footer-header">
                  <span>Let's build something</span>
                  <span>Amazing!</span>
                </h1>
            </div>

            <div className="footer-contact">
              
              <button className="footer-btn">
                <Link to = '/contact'>Contact me</Link>
              </button>

              <div className="contact-link">
                <button  className="email linkBtn">
                  <a href="mailto:tharindulakmal.k8@gmail.com">tharindulakmal.k8@gmail.com</a>
                </button>
                <button className="phone linkBtn">
                  <a href='https://m.me/tharindulakmal99' target='_blank'>
                    Find me
                    <img src={assets.whatsapp} alt="" />
                  </a>
                </button>
              </div>

            </div>

            <div className="social-links">
              <div className="social-links-inner">
                <iframe src="https://lottie.host/embed/fff8f992-0dd2-479c-92ac-0f69f1dfa53d/rXfmeRCLiA.json"></iframe>
                <a href='https://linkedin.com/in/tharindu-lakmal-1b09022a2' target='_blank' className="social-link">LinkdIn</a>
                <a href='https://github.com/Tharindu-Lakmal' target='_blank' className="social-link">GitHub</a>
              </div>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Footer