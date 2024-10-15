import React, { useState } from 'react'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const NavBar = () => {

    const [navActive, setNavActive] = useState(false)

  return (
    <div className='navBar'>
        <div className="navBar-container">

            <div className="logo">
                <Link to = '/'>
                    <img src={assets.logo} alt="" />
                </Link>
            </div>

            <nav className={navActive ? "nav-links":"nav-links disable"}>
                <div className="nav-top">
                    <h3 className="nav-heading">Navigation</h3>
                </div>

                <div className="nav-middle">
                    <ul className="nav-links-inner">
                        <li className="nav-link"><NavLink to = '/' style={({ isActive }) => {return isActive ? { fontSize: "3.8rem" } : {}; }}>Home</NavLink></li>
                        <li className="nav-link"><NavLink to = '/work' style={({ isActive }) => {return isActive ? { fontSize: "3.8rem" } : {}; }}>Work</NavLink></li>
                        <li className="nav-link"><NavLink to = '/about' style={({ isActive }) => {return isActive ? { fontSize: "3.8rem" } : {}; }}>About</NavLink></li>
                        <li className="nav-link"><NavLink to = '/contact' style={({ isActive }) => {return isActive ? { fontSize: "3.8rem" } : {}; }}>Contact</NavLink></li>
                        {/* <li className="nav-link">Home</li>
                        <li className="nav-link">Work</li>
                        <li className="nav-link">About</li>
                        <li className="nav-link">Contact</li> */}
                    </ul>
                </div>

                <div className="nav-bottom">
                    <ul className="nav-social-links">
                        <li className="nav-social-link"><a href="#">LinkdIn</a></li>
                        <li className="nav-social-link"><a href="#">GitHub</a></li>
                    </ul>
                </div>
            </nav>

            <div className="open-close">
                <div onClick={() => setNavActive(true)} className="open">
                    <p>Menu</p>
                </div>
                <div onClick={() => setNavActive(false)} className="scroll-btn">
                    <div className="scroll-bar"></div>
                    <div className="scroll-bar"></div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default NavBar