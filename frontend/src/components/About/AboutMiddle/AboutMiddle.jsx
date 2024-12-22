import React, { useEffect, useRef } from "react";
import './AboutMiddle.css';
import { assets } from '../../../assets/assets';
import Lenis from '@studio-freight/lenis'; // Import Lenis for smooth scrolling

const AboutMiddle = () => {
    // Reference for userBig element
    const userBigRef = useRef(null);

    useEffect(() => {
        // Initialize Lenis Smooth Scrolling
        const lenis = new Lenis({
            duration: 1.5,     // Smooth scrolling duration
            smooth: true,      // Enable smooth scrolling
            lerp: 0.1,         // Interpolation factor
        });

        // Animation Frame for Lenis
        const raf = (time) => {
            lenis.raf(time); // Sync Lenis animation
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        // **Real-time Scroll Listener**
        const handleScroll = () => {
            const scrollPosition = window.scrollY; // Get current scroll position
            const screenWidth = window.innerWidth;

            if (userBigRef.current && screenWidth > 1200) {
                const containerHeight = 1000; // Maximum height of the container
                const minHeight = 650;

                // Calculate new height dynamically
                const newHeight = Math.max(
                    minHeight,
                    containerHeight - scrollPosition * 0.2
                );

                // Prevent going beyond the container
                const translateY = Math.min(
                    (containerHeight - newHeight) / 2,
                    (containerHeight - minHeight) / 2
                );

                // Apply styles for smooth height and upward movement
                userBigRef.current.style.height = `${newHeight}px`;
                userBigRef.current.style.transform = `translateY(-${translateY}px)`; // Moves up as height decreases
            }
        };

        // Add native scroll listener for real-time updates
        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            lenis.destroy(); // Destroy Lenis instance
            window.removeEventListener('scroll', handleScroll); // Remove scroll listener
        };
    }, []);

    return (
        <div className='aboutMiddle'>

            <div className="aboutMiddle-top">
                <div className="aim">
                    <img src={assets.aim} alt="" />
                    <p className="aim-text">
                        With practice in both Frontend and Backend 
                        development, I leverage technologies like 
                        ReactJS, NodeJS, PHP, and more to create 
                        seamless, scalable, and functional applications.
                    </p>
                </div>

                <div className="container-card">
                    <div className="card-icon">
                        <img src={assets.right_quotation} alt="" />
                    </div>
                    <div className="card-content">
                        <p>
                            Whether it's designing a captivating user interface 
                            or building a powerful backend architecture, 
                            my focus is on delivering high-quality solutions 
                            that not only meet your requirements but also 
                            inspire and engage.
                        </p>
                    </div>
                    <div className="card-icon-bottom">
                        <img src={assets.right_quotation_} alt="" />
                    </div>
                </div>
            </div>

            <div
                ref={userBigRef}
                className="userBig"
            >
                <img src={assets.userbig} alt="" />
            </div>

        </div>
    );
};

export default AboutMiddle;
