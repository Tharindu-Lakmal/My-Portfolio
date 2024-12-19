import React, { useEffect, useState } from "react";
import './AboutMiddle.css'
import { assets } from '../../../assets/assets'

const AboutMiddle = () => {

    const [scrollHeight, setScrollHeight] = useState();

    const windowWidth = window.innerWidth;

    useEffect(() => {
        const handleScroll = () => {
        const maxHeight = 1000; // Initial height
        const minHeight = 650; // Minimum height
        const scrollPosition = window.scrollY;

        const newHeight = Math.max(
            minHeight,
            maxHeight - scrollPosition * 0.2 // smoother transition
        );

        setScrollHeight(newHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
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
                <div className="card-icon"><img src={assets.right_quotation} alt="" /></div>
                    <div className="card-content">
                        <p>
                            Whether it's designing a captivating user interface 
                            or building a powerful backend architecture, 
                            my focus is on delivering high-quality solutions 
                            that not only meet your requirements but also 
                            inspire and engage.
                        </p>
                    </div>
                <div className="card-icon-bottom"><img src={assets.right_quotation_} alt="" /></div>
              </div>

        </div>

        <div className="userBig" style={ windowWidth >= 1200? { height: `${scrollHeight}px`, overflow: "hidden" } : {}}>
            <img src={assets.userbig} alt="" />
        </div>

    </div>
  )
}

export default AboutMiddle