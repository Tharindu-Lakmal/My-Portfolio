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
                  <a href="mailto:tharindulakmal.k7@gmail.com">tharindulakmal.k7@gmail.com</a>
                </button>
                <button className="phone linkBtn">
                  <p>
                    Find me
                    <img src={assets.whatsapp} alt="" />
                  </p>
                </button>
              </div>

            </div>

            <div className="social-links">
              <div className="social-links-inner">
                {/* <iframe src="https://lottie.host/embed/647cd8eb-d93f-486d-bdba-d1c95a61baca/mK2YMCZilm.json"></iframe> */}
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