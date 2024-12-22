import React, { useEffect } from 'react';
import './Footer.css'
import { assets } from '../../assets/assets'
import CommonBtn from '../btn/CommonBtn'
import NavLinkBtn from '../btn/NavLinkBtn'
import CircleBtn from '../btn/CircleBtn'

const Footer = () => {

    useEffect(() => {
      const footer = document.querySelector('.footer');
      const root = document.documentElement;

      const handleScroll = () => {
        const footerRect = footer.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (footerRect.top <= viewportHeight) {
          const visibleHeight = viewportHeight - footerRect.top;
          const progress = Math.min(visibleHeight / footerRect.height, 1);

          let newHeight = 100 * (1 - progress);
          if (window.innerWidth < 980) {
            newHeight = 80 * (1 - progress);
          }

          root.style.setProperty('--footer-before-height', `${newHeight}px`);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
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
                <CommonBtn title='+94 75 806 1381' path='https://wa.me/+94758061381?text=Hello, how can I help you?' target='_blank' icon={assets.whatsapp} />     
              </div>

            </div>

            <div className="social-links">
              <div className="social-links-inner">
                <iframe src="https://lottie.host/embed/fff8f992-0dd2-479c-92ac-0f69f1dfa53d/rXfmeRCLiA.json"></iframe>

                <NavLinkBtn type='LinkedIn' link='https://www.linkedin.com/in/tharindulakmal99' />
                <NavLinkBtn type='GitHub' link='https://github.com/Tharindu-Lakmal' />

              </div>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Footer