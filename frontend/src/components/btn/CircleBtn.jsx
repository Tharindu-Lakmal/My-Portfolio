import React, { useRef, useEffect, useState } from 'react';
import { gsap, Elastic, Power4 } from 'gsap';
import './CircleBtn.css'
import { Link } from 'react-router-dom';

const CircleBtn = ({type, link}) => {

    const [size, setSize] = useState({ width: '10rem', height: '10rem' });

    //Set screen sizes
    useEffect(() => {
        const updateSize = () => {
          if (window.innerWidth >= 1200) {
            setSize(type === 'Contact me' ? { width: '12rem', height: '12rem', background: 'var(--button-active)' } : { width: '10rem', height: '10rem' });
          } else if (window.innerWidth >= 768) {
            setSize(type === 'Contact me' ? { width: '10rem', height: '10rem', background: 'var(--button-active)' } : { width: '10rem', height: '10rem' });
          } else {
            setSize(type === 'Contact me' ? { width: '10rem', height: '10rem', background: 'var(--button-active)' } : { width: '10rem', height: '10rem' });
          }
        };
    
        updateSize();
        window.addEventListener('resize', updateSize);
    
        return () => window.removeEventListener('resize', updateSize);
      }, [type]);



    //GSAP

    const magnetoRef = useRef(null);
    const magnetoTextRef = useRef(null);

    useEffect(() => {
        const magneto = magnetoRef.current;
        const magnetoText = magnetoTextRef.current;

        const magnetoStrength = 60;
        const magnetoTextStrenth = 100;

        const activateMagneto = (event) => {
            const boundBox = magneto.getBoundingClientRect();

            const newX = (event.clientX - boundBox.left) / magneto.offsetWidth - 0.5;
            const newY = (event.clientY - boundBox.top) / magneto.offsetHeight - 0.5;

            // Move the button to its new position
            gsap.to(magneto, {
                duration: -10,
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
                duration: -10,
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


  return (
    <div className='circleBtn'>
        <Link to = {link}>
            <button style={size} className='magneto' ref={magnetoRef}>
                <span className='magneto-text' ref={magnetoTextRef}>{type}</span>
            </button>
        </Link>
    </div>
  )
}

export default CircleBtn