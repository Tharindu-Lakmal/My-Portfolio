import React from 'react'
import './Intro.css'

const Intro = () => {
  return (
    <div className='info'>
        <div className="info-container">

            <h2 className="header">Introducing myself</h2>
            
            <div className="info-content">
                <div className="left-side">
                    <p className="header-p">
                        I’m Tharindu Lakmal, a Software Engineering undergraduate at 
                        Sabaragamuwa University of Sri Lanka and 
                        passionate about designing and developing 
                        websites. 
                    </p>
                    <p className="header-p">
                        I develop full stack web application and user 
                        friendly designs with modern technologies 
                        like React, Node.js, and Figma.
                    </p>
                </div>
                <div className="right-side">
                    <p className="header-text">
                        Let’s build websites that not only look great but 
                        deliver seamless user experiences, bringing the 
                        vision to life.
                    </p>

                    <button className='about-btn'>About me</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Intro