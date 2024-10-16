import React, { useRef, useEffect } from 'react';
import { gsap, Elastic, Power4 } from 'gsap';
import './CircleBtn.css'
import { Link } from 'react-router-dom';

const CircleBtn = () => {

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


  return (
    <div className='circleBtn'>
        <Link to = "/about">
            <button className='magneto' ref={magnetoRef}>
                <span className='magneto-text' ref={magnetoTextRef}>About me</span>
            </button>
        </Link>
    </div>
  )
}

export default CircleBtn