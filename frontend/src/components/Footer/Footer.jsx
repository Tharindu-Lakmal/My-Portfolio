import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import CommonBtn from '../btn/CommonBtn'
import NavLinkBtn from '../btn/NavLinkBtn'
import CircleBtn from '../btn/CircleBtn'

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
              
              <div className="footer-btn">
                <CircleBtn type='Contact me' link='/contact' />
              </div>

              <div className="contact-link">
                <CommonBtn title='tharindulakmal.k8@gmail.com' path='mailto:tharindulakmal.k8@gmail.com' />
                <CommonBtn title='Find me' path='https://wa.me/+94758061381?text=Hello, how can I help you?' target='_blank' icon={assets.whatsapp} />     
              </div>

            </div>

            <div className="social-links">
              <div className="social-links-inner">
                <iframe src="https://lottie.host/embed/fff8f992-0dd2-479c-92ac-0f69f1dfa53d/rXfmeRCLiA.json"></iframe>

                <NavLinkBtn type='LinkdIn' link='https://www.linkedin.com/in/tharindulakmal99' />
                <NavLinkBtn type='GitHub' link='https://github.com/Tharindu-Lakmal' />

              </div>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Footer