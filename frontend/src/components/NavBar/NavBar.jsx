import React, { useRef, useEffect, useState } from 'react';
import { gsap, Elastic, Power4 } from 'gsap';
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {

    const [navActive, setNavActive] = useState(false);


    const magnetoRefMini = useRef(null);
    const magnetoTextRefMini = useRef(null);

    useEffect(() => {
        const magnetoMini = magnetoRefMini.current;
        const magnetoTextMini = magnetoTextRefMini.current;

        const magnetoStrength = 20;
        const magnetoTextStrenth = 40;

        const activateMagneto = (event) => {
            const boundBox = magnetoMini.getBoundingClientRect();

            const newX = (event.clientX - boundBox.left) / magnetoMini.offsetWidth - 0.5;
            const newY = (event.clientY - boundBox.top) / magnetoMini.offsetHeight - 0.5;

            // Move the button to its new position
            gsap.to(magnetoMini, {
                duration: 1,
                x: newX * magnetoStrength,
                y: newY * magnetoStrength,
                ease: Power4.easeOut,
            });

            gsap.to(magnetoTextMini, {
                duration: 1,
                x: newX * magnetoTextStrenth,
                y: newY * magnetoTextStrenth,
                ease: Power4.easeOut,
            });
        };

        const resetMagneto = () => {
            gsap.to(magnetoMini, {
                duration: 1,
                x: 0,
                y: 0,
                ease: Elastic.easeOut,
            });

            gsap.to(magnetoTextMini, {
                duration: 1,
                x: 0,
                y: 0,
                ease: Elastic.easeOut,
            });
        };

        // Add event listeners
        if (magnetoMini) {
            magnetoMini.addEventListener('mousemove', activateMagneto);
            magnetoMini.addEventListener('mouseleave', resetMagneto);
        }

        // Clean up event listeners when the component unmounts
        return () => {
            if (magnetoMini) {
                magnetoMini.removeEventListener('mousemove', activateMagneto);
                magnetoMini.removeEventListener('mouseleave', resetMagneto);
            }
        };
    }, []);

  return (
    <div className='navBar'>
        <div className="navBar-container">

            <div className="logo">
                <Link to = '/'>
                    <p>Tharindu Lakmal.</p>
                </Link>
            </div>

            <nav className={navActive ? "nav-links":"nav-links disable"}>
                <div className="nav-top">
                    <h3 className="nav-heading">Navigation</h3>
                </div>

                <div className="nav-middle">
                    <ul className="nav-links-inner">
                        <li onClick={() => setNavActive(false)} className="nav-link"><NavLink to = '/' style={({ isActive }) => {return isActive ? { fontSize: "3.9rem" } : {}; }}>Home</NavLink></li>
                        <li onClick={() => setNavActive(false)} className="nav-link"><NavLink to = '/work' style={({ isActive }) => {return isActive ? { fontSize: "3.9rem" } : {}; }}>Work</NavLink></li>
                        <li onClick={() => setNavActive(false)} className="nav-link"><NavLink to = '/about' style={({ isActive }) => {return isActive ? { fontSize: "3.9rem" } : {}; }}>About</NavLink></li>
                        <li onClick={() => setNavActive(false)} className="nav-link"><NavLink to = '/contact' style={({ isActive }) => {return isActive ? { fontSize: "3.9rem" } : {}; }}>Contact</NavLink></li>
                    </ul>
                </div>

                <div className="nav-bottom">
                    <ul className="nav-social-links">
                        <li className="nav-social-link"><a href='https://linkedin.com/in/tharindu-lakmal-1b09022a2' target='_blank'>LinkdIn</a></li>
                        <li className="nav-social-link"><a href='https://github.com/Tharindu-Lakmal' target='_blank'>GitHub</a></li>
                    </ul>
                </div>
            </nav>

            <div className="open-close">
                <div onClick={() => setNavActive(true)} className={navActive ? "open hide":"open"} ref={magnetoRefMini}>
                    <p className='open-text' ref={magnetoTextRefMini}>Menu</p>
                </div>
                <div onClick={() => setNavActive(false)} className={navActive ? "scroll-btn active":"scroll-btn scroll-btn-disable"}>
                    <div className="scroll-bar bar1"></div>
                    <div className="scroll-bar bar2"></div>
                </div>
            </div>

            <div onClick={() => setNavActive(false)} className={navActive ? "overlay":"overlay hide"}></div>

        </div>
    </div>
  )
}

export default NavBar