import React, { useRef, useEffect } from 'react';
import { gsap, Elastic, Power4 } from 'gsap';
import './CommonWorkBtn.css'

const CommonWorkBtn = ({type, handleClick, currentType, len}) => {

    const WorkmagnetoRef = useRef(null);
    const WorkmagnetoTextRef = useRef(null);

    useEffect(() => {
        const Workmagneto = WorkmagnetoRef.current;
        const WorkmagnetoText = WorkmagnetoTextRef.current;

        const CmagnetoStrength = 20;
        const CmagnetoTextStrenth = 30;

        const activateMagneto = (event) => {
            const boundBox = Workmagneto.getBoundingClientRect();

            const newX = (event.clientX - boundBox.left) / Workmagneto.offsetWidth - 0.5;
            const newY = (event.clientY - boundBox.top) / Workmagneto.offsetHeight - 0.5;

            // Move the button to its new position
            gsap.to(Workmagneto, {
                duration: -10,
                x: newX * CmagnetoStrength,
                y: newY * CmagnetoStrength,
                ease: Power4.easeOut,
            });

            gsap.to(WorkmagnetoText, {
                duration: 1,
                x: newX * CmagnetoTextStrenth,
                y: newY * CmagnetoTextStrenth,
                ease: Power4.easeOut,
            });
        };

        const resetMagneto = () => {
            gsap.to(Workmagneto, {
                duration: -10,
                x: 0,
                y: 0,
                ease: Elastic.easeOut,
            });

            gsap.to(WorkmagnetoText, {
                duration: 1,
                x: 0,
                y: 0,
                ease: Elastic.easeOut,
            });
        };

        // Add event listeners
        if (Workmagneto) {
            Workmagneto.addEventListener('mousemove', activateMagneto);
            Workmagneto.addEventListener('mouseleave', resetMagneto);
        }

        // Clean up event listeners when the component unmounts
        return () => {
            if (Workmagneto) {
                Workmagneto.removeEventListener('mousemove', activateMagneto);
                Workmagneto.removeEventListener('mouseleave', resetMagneto);
            }
        };
    }, []);

  return (
    <button onClick={handleClick} className={`Workmagneto ${currentType === type?"btn-active":"btn-empty"}`} ref={WorkmagnetoRef}>
        <span className='Workmagneto-text' ref={WorkmagnetoTextRef}>
            {type}
            <p className='len'>{len}</p>
        </span>
    </button>
  )
}

export default CommonWorkBtn