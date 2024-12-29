import React, { useEffect, useRef } from 'react'
import './WorkDataHero.css'
import Lenis from '@studio-freight/lenis';

const WorkDataHero = ({work}) => {

    const userBigRef = useRef(null);
    
    useEffect(() => {
            
        const lenis = new Lenis({
            duration: 1.5,
            smooth: true,  
            lerp: 0.1,
        });
    
        const raf = (time) => {
            lenis.raf(time); 
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);
    
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const screenWidth = window.innerWidth;
    
            if (userBigRef.current && screenWidth > 1200) {
                const containerHeight = 1000;
                const minHeight = 550;

                const newHeight = Math.max(
                    minHeight,
                    containerHeight - scrollPosition * 0.2
                );
    
                const translateY = Math.min(
                    (containerHeight - newHeight) / 2,
                    (containerHeight - minHeight) / 2
                );
    
                userBigRef.current.style.height = `${newHeight}px`;
                userBigRef.current.style.transform = `translateY(-${translateY}px)`; // Moves up as height decreases
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
            // Cleanup
        return () => {
            lenis.destroy();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <div className='workdatahero'>

        <div ref={userBigRef} className="userBig">
            <img src={work.big_img} alt="" />
        </div>

        <div className="workdatahero-top">
            <div className="aim">
                <p className="aim-text">
                    {work.description}
                </p>
            </div>
        </div>

    </div>
  )
}

export default WorkDataHero