import React from 'react'
import './AboutHeader.css'
import { assets } from '../../../assets/assets'
import AboutMiddle from '../AboutMiddle/AboutMiddle'
import AboutBottomContent from '../AboutBottomContent/AboutBottomContent'

const AboutHeader = () => {
  return (
    <div className='aboutHeader'>
        <div className="aboutHeader-container">

          <div className="aboutHeader-header">

            <div className="aboutHeader-header-top">
              <div className="about-img">
                <img src={assets.hello} alt="" />
              </div>

              <div className="about-main-header">
                <h2>I'm Tharindu Lakmal</h2>
                <h3>
                  Helping to build digital 
                  solutions with excellence
                </h3>
              </div>
            </div>

            <div className="aboutHeader-header-bottom">

              <div className="container-card">
                <div className="card-icon"><img src={assets.right_quotation} alt="" /></div>
                <div className="card-content">
                  <p>
                    I'm a dedicated software engineering undergraduate 
                    with a focus on building impactful digital products.
                  </p>
                </div>
                <div className="card-icon-bottom"><img src={assets.right_quotation_} alt="" /></div>
              </div>

              <div className="container-card">
                <div className="card-icon"><img src={assets.right_quotation_white} alt="" /></div>
                <div className="card-content">
                  <p>
                    I believe in the power of clean, efficient code and innovative design.
                  </p>
                </div>
                <div className="card-icon-bottom"><img src={assets.right_quotation_white_} alt="" /></div>
              </div>

              <div className="container-card">
                <div className="card-icon"><img src={assets.right_quotation} alt="" /></div>
                <div className="card-content">
                  <p>
                    My goal is to create products that not only meet user needs but exceed expectations, 
                    delivering both functionality and a seamless experience.
                  </p>
                </div>
                <div className="card-icon-bottom"><img src={assets.right_quotation_} alt="" /></div>
              </div>

            </div>

          </div>

          <div className="aboutHeader-middle">
            <AboutMiddle />
          </div>

          <div className="aboutHeader-bottom">
            <AboutBottomContent />
          </div>

        </div>
    </div>
  )
}

export default AboutHeader