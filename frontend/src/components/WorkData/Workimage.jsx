import React, { useEffect, useRef, useState } from 'react';
import './Workimage.css';
import Lenis from '@studio-freight/lenis';

const Workimage = ({ work }) => {
    
    const containerRef = useRef(null);

    const listRefs = useRef([]); // Store references for each <li> item
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992); // Track screen size

    // Update scale dynamically based on screen size
    const updateScale = () => {
        if (isDesktop) {
            listRefs.current.forEach((li, index) => {
                if (li) {
                    switch (index) {
                        case 0:
                            li.style.transform = 'scale(0.9)'; 
                            break;
                        case 1:
                            li.style.transform = 'scale(1)';
                            break;
                        case 2:
                            li.style.transform = 'scale(0.9)';
                            break;
                        default:
                            li.style.transform = 'scale(1)'; 
                    }
                    li.style.transition = 'transform 0.3s ease'; 
                }
            });
        } else {
            
            listRefs.current.forEach((li) => {
                if (li) {
                    li.style.transform = 'scale(1)';
                }
            });
        }
    };

    // Window resize listener to update scaling dynamically
    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 992); 
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Apply scaling whenever screen size or state changes
    useEffect(() => {
        updateScale(); // Apply scale on mount and resize
    }, [isDesktop]);




    // Lenis for smooth scrolling
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

            if (containerRef.current && screenWidth > 1200) {
                const maxHeight = 1400;
                const minHeight = 600;

                const newHeight = Math.max(
                    minHeight,
                    maxHeight - scrollPosition * 0.3
                );

                containerRef.current.style.height = `${newHeight}px`;
                containerRef.current.style.transition = 'height 0.3s ease';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            lenis.destroy();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='workimage'>
            <div ref={containerRef} className="workimage-container">
                <div className="userBig">
                    <ul>
                        {work?.images?.map((item, index) => (
                            <li
                                key={index}
                                ref={(el) => (listRefs.current[index] = el)} // Store ref for each <li>
                            >
                                <img src={item} alt={`work-image-${index}`} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Workimage;
