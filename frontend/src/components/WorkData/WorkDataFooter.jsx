import React, { useEffect } from 'react'
import './WorkDataFooter.css'
import { all_work } from '../../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import NavLinkBtn from '../btn/NavLinkBtn'
import CommonBtn from '../btn/CommonBtn'

const WorkDataFooter = ({}) => {

    const len = all_work.length;

    const navigate = useNavigate();



    useEffect(() => {
          const footer = document.querySelector('.workdatafooter');
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


        const shuffled = all_work.sort(() => Math.random() - 0.5);

  return (
    <div className='workdatafooter'>
        <div className="workdatafooter-container">

            <div className="other-work">
                <ul>
                    {shuffled.slice(0, 3).map((item, index) => {
                        return (
                        <>
                            <li key={index}>
                                <div className="footer-card" onClick={() => {

                                    setTimeout(() => {
                                        navigate(`/work/${item?.name}`);
                                    }, 200);
                                    
                                     // Navigate to the route

                                    setTimeout(() => {
                                        window.location.reload(); // Reload the page loader
                                    }, 400);
                                }}
                                >
                                    <div className="main-heading">
                                        <h2>{item.name}</h2>
                                        <hr />
                                        <div className='main-heading-bottom'>
                                            <p>{item.category}</p>
                                            <p>{item.type}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </>
                        )
                    })}
                </ul>
            </div>
            
            <CommonBtn title='More work' path='/work' len={len} width='fit' />

            <div>
                <div className="contact-footer">
                    <NavLinkBtn type='tharindulakmal.k8@gmail.com' link='mailto:tharindulakmal.k8@gmail.com' />

                    <div className="social">
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

export default WorkDataFooter