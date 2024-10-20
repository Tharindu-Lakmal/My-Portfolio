import React from 'react'
import './Work.css'
import { top_work } from '../../../assets/assets'
import { Link } from 'react-router-dom'


const Work = () => {
  return (
    <div className='works'>
        <div className="work-container">

            <h2 className="header">Recent work</h2>

            <div className="works-content">
                {top_work.map((item, index) => {
                    return (
                        <div className="work" key={index}>

                            <div className="work-img">
                                <div className="view-btn">
                                    <button><a href={item.Link} target='_blank'>View</a></button>
                                </div>
                                <img src={item.card_img} alt="" />
                            </div>

                            <div className="work-content">

                                <div className="work-top">
                                    <p className="category">{item.category} <span><a href={item.Link}><img src={item.git_icon} alt="" /></a></span></p>
                                    <h2 className="name">{item.name}</h2>
                                </div>
                                <div className="work-bottom">
                                    <p className="description">{item.description}</p>
                                    
                                    <p className="tools">
                                        {item.tools && item.tools.map((tool, toolIndex) => (
                                            <span key={toolIndex}>{tool}</span>
                                        ))}
                                    </p>
                                    
                                </div>

                            </div>

                        </div>
                    )
                })}
            </div>

            
            <button className="btn-work btn-dark">
                <Link to = '/work'>More work</Link>
            </button>
            
        </div>
    </div>
  )
}

export default Work