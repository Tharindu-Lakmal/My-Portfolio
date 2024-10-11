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
                  <span>Let's build something</span>
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