import React from 'react'
import './AboutBottomContent.css'
import { assets, tools2 } from '../../../assets/assets'

const AboutBottomContent = () => {
  return (
    <div className='aboutBottomContent'>
        <h2 className='aboutBottomContent-heading'>What I recently doing</h2>

        <div className="aboutBottomContent-card-container">

          <div className="aboutBottomContent-card">

            <div className="card-top">
              <img src={assets.design_icon} alt="" />
              <h2>Design</h2>
              <p>
                I craft visually appealing, user-friendly designs to 
                bring ideas to life. My focus is on creating intuitive 
                layouts, engaging aesthetics, and seamless user 
                experiences that resonate with users.
              </p>
            </div>

            <div className="card-bottom">
              <p className="card-subheader">Tools & Techniques:</p>

              <div className="card-bottom-tools">
                {tools2.slice(0, 4).map((item, index) => {
                  return (
                    <div className="about-tools" key={index}>
                      <img src={item.tools_icon} alt="" />
                      <p>{item.tools_name}</p>
                    </div>
                  )
                })}
              </div>

            </div>

          </div>

          <div className="aboutBottomContent-card">
            
            <div className="card-top">
              <img src={assets.development_icon} alt="" />
              <h2>Development</h2>
              <p>
                I develop scalable, high-performance website 
                using the latest technologies. I ensure every 
                aspect of a website runs smoothly, delivering 
                both functionality and efficiency.
              </p>
            </div>

            <div className="card-bottom">
              <p className="card-subheader">Tools & Techniques:</p>

              <div className="card-bottom-tools">
                {tools2.slice(4).map((item, index) => {
                  return (
                    <div className="about-tools" key={index}>
                      <img src={item.tools_icon} alt="" />
                      <p>{item.tools_name}</p>
                    </div>
                  )
                })}
              </div>
                
            </div>

          </div>

        </div>
    </div>
  )
}

export default AboutBottomContent