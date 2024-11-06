import React, { useRef, useEffect } from 'react';
import { gsap, Elastic, Power4 } from 'gsap';
import './Intro.css'
import CircleBtn from '../../btn/CircleBtn';
import { assets } from '../../../assets/assets';

const Intro = () => {

    const magnetoRef = useRef(null);
    const magnetoTextRef = useRef(null);

    useEffect(() => {
        const magneto = magnetoRef.current;
        const magnetoText = magnetoTextRef.current;

        const magnetoStrength = 40;
        const magnetoTextStrenth = 80;

        const activateMagneto = (event) => {
            const boundBox = magneto.getBoundingClientRect();

            const newX = (event.clientX - boundBox.left) / magneto.offsetWidth - 0.5;
            const newY = (event.clientY - boundBox.top) / magneto.offsetHeight - 0.5;

            // Move the button to its new position
            gsap.to(magneto, {
                duration: 1,
                x: newX * magnetoStrength,
                y: newY * magnetoStrength,
                ease: Power4.easeOut,
            });

            gsap.to(magnetoText, {
                duration: 1,
                x: newX * magnetoTextStrenth,
                y: newY * magnetoTextStrenth,
                ease: Power4.easeOut,
            });
        };

        const resetMagneto = () => {
            gsap.to(magneto, {
                duration: 1,
                x: 0,
                y: 0,
                ease: Elastic.easeOut,
            });

            gsap.to(magnetoText, {
                duration: 1,
                x: 0,
                y: 0,
                ease: Elastic.easeOut,
            });
        };

        // Add event listeners
        if (magneto) {
            magneto.addEventListener('mousemove', activateMagneto);
            magneto.addEventListener('mouseleave', resetMagneto);
        }

        // Clean up event listeners when the component unmounts
        return () => {
            if (magneto) {
                magneto.removeEventListener('mousemove', activateMagneto);
                magneto.removeEventListener('mouseleave', resetMagneto);
            }
        };
    }, []);


    useEffect(() => {
        const btn_scroller = document.querySelector('.CircleBtn');

        function handleScroller() {
            let scrolled = (window.scrollY)/6;
      
            if (scrolled < 380) {
                btn_scroller.style.left = `${scrolled / 4}%`;
                btn_scroller.style.bottom = `${scrolled / 6}%`;
            }
          }
      
          window.addEventListener('scroll', handleScroller);
    },[]);


  return (
    <div className='info'>
        <div className="info-container">

            {/* <h2 className="header">Introducing myself</h2> */}
            
            <div className="info-content">
                <div className="left-side">
                    <p className="header-p">
                        I’m Tharindu Lakmal, a Software Engineering undergraduate and 
                        passionate about designing and developing 
                        websites. 
                    </p>
                    <p className="header-p">
                        I develop web application and user 
                        friendly designs with modern technologies 
                        like React, Node.js, and Figma.
                    </p>

                    <a className="cv" href={assets.cv} target='_blank'>
                        Download CV
                        <img src={assets.cvarrow} alt="" />
                    </a>

                </div>
                <div className="right-side">
                    <p className="header-text">
                        Let’s build websites that not only look great but 
                        deliver seamless user experiences, bringing the 
                        vision to life.
                    </p>

                    {/* <button className='magneto' ref={magnetoRef}>
                        <span className='magneto-text' ref={magnetoTextRef}>About me</span>
                    </button> */}

                    <div className="CircleBtn">
                        <CircleBtn />
                    </div>
                    
                    

                </div>
            </div>
        </div>
    </div>
  )
}

export default Intro