import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const SmoothScroller = ({ children }) => {

    useEffect(() => {
        const lenis = new Lenis({
          duration: 1.5, // Speed of the animation (1.5s)
          smooth: true,
          ease: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
        });
    
        const raf = (time) => {
          lenis.raf(time); // Sync animation frames
          requestAnimationFrame(raf);
        };
    
        requestAnimationFrame(raf);
    
        // Cleanup Lenis instance
        return () => lenis.destroy();
    }, []);
    
  return (
    <div>
        {children}
    </div>
  )
}

export default SmoothScroller