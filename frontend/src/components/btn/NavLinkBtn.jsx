import React, { useRef, useEffect } from 'react';
import { gsap, Elastic, Power4 } from 'gsap';
import './NavLinkBtn.css'

const NavLinkBtn = ({type, link}) => {

    const NavmagnetoRef = useRef(null);
    const NavmagnetoTextRef = useRef(null);

    useEffect(() => {
        const Navmagneto = NavmagnetoRef.current;
        const NavmagnetoText = NavmagnetoTextRef.current;

        const magnetoStrength = 5;
        const magnetoTextStrenth = 10;

        const activateMagneto = (event) => {
            const boundBox = Navmagneto.getBoundingClientRect();

            const newX = (event.clientX - boundBox.left) / Navmagneto.offsetWidth - 0.5;
            const newY = (event.clientY - boundBox.top) / Navmagneto.offsetHeight - 0.5;

            // Move the button to its new position
            gsap.to(Navmagneto, {
                duration: -10,
                x: newX * magnetoStrength,
                y: newY * magnetoStrength,
                ease: Power4.easeOut,
            });

            gsap.to(NavmagnetoText, {
                duration: 1,
                x: newX * magnetoTextStrenth,
                y: newY * magnetoTextStrenth,
                ease: Power4.easeOut,
            });
        };

        const resetMagneto = () => {
            gsap.to(Navmagneto, {
                duration: -10,
                x: 0,
                y: 0,
                ease: Elastic.easeOut,
            });

            gsap.to(NavmagnetoText, {
                duration: 1,
                x: 0,
                y: 0,
                ease: Elastic.easeOut,
            });
        };

        // Add event listeners
        if (Navmagneto) {
            Navmagneto.addEventListener('mousemove', activateMagneto);
            Navmagneto.addEventListener('mouseleave', resetMagneto);
        }

        // Clean up event listeners when the component unmounts
        return () => {
            if (Navmagneto) {
                Navmagneto.removeEventListener('mousemove', activateMagneto);
                Navmagneto.removeEventListener('mouseleave', resetMagneto);
            }
        };
    }, []);


  return (
    <div className='NavLinkBtn' ref={NavmagnetoRef}>
        <a href={link} target='_blank' className="social-link" ref={NavmagnetoTextRef}>{type}</a>
    </div>
  )
}

export default NavLinkBtn