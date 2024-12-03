import React, { useRef, useEffect } from 'react';
import './CommonBtn.css'
import { gsap, Elastic, Power4 } from 'gsap';
import { Link } from 'react-router-dom';

const CommonBtn = ({title, icon, path, len, width}) => {

    const CmagnetoRef = useRef(null);
    const CmagnetoTextRef = useRef(null);

    useEffect(() => {
        const Cmagneto = CmagnetoRef.current;
        const CmagnetoText = CmagnetoTextRef.current;

        const CmagnetoStrength = 20;
        const CmagnetoTextStrenth = 40;

        const activateMagneto = (event) => {
            const boundBox = Cmagneto.getBoundingClientRect();

            const newX = (event.clientX - boundBox.left) / Cmagneto.offsetWidth - 0.5;
            const newY = (event.clientY - boundBox.top) / Cmagneto.offsetHeight - 0.5;

            // Move the button to its new position
            gsap.to(Cmagneto, {
                duration: -10,
                x: newX * CmagnetoStrength,
                y: newY * CmagnetoStrength,
                ease: Power4.easeOut,
            });

            gsap.to(CmagnetoText, {
                duration: 1,
                x: newX * CmagnetoTextStrenth,
                y: newY * CmagnetoTextStrenth,
                ease: Power4.easeOut,
            });
        };

        const resetMagneto = () => {
            gsap.to(Cmagneto, {
                duration: -10,
                x: 0,
                y: 0,
                ease: Elastic.easeOut,
            });

            gsap.to(CmagnetoText, {
                duration: 1,
                x: 0,
                y: 0,
                ease: Elastic.easeOut,
            });
        };

        // Add event listeners
        if (Cmagneto) {
            Cmagneto.addEventListener('mousemove', activateMagneto);
            Cmagneto.addEventListener('mouseleave', resetMagneto);
        }

        // Clean up event listeners when the component unmounts
        return () => {
            if (Cmagneto) {
                Cmagneto.removeEventListener('mousemove', activateMagneto);
                Cmagneto.removeEventListener('mouseleave', resetMagneto);
            }
        };
    }, []);

  return (
    <div className='commonbtn' style={width=='fit' ? {width: 'fit-content', margin: '40px auto 0'} : undefined}>
        <Link to = {path}>
            <button className='Cmagneto' ref={CmagnetoRef}>
                <span className='Cmagneto-text' ref={CmagnetoTextRef}>
                    {title}
                    <img style={icon ? { width: '26px', marginLeft: '12px' } : undefined} src={icon} alt="" /> 
                    <p>{len}</p>
                </span>  
            </button>
        </Link>
    </div>
  )
}

export default CommonBtn