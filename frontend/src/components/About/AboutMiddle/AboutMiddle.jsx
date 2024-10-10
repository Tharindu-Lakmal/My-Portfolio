import React from 'react'
import './AboutMiddle.css'
import { assets } from '../../../assets/assets'

const AboutMiddle = () => {
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

        <div className="userBig">
            <img src={assets.userbig} alt="" />
        </div>

    </div>
  )
}

export default AboutMiddle