import React from 'react'
import './Development.css'
import { all_work } from '../../../assets/assets'

const Development = () => {
  return (
    <div className='allWork'>
        {all_work.map((item, index) => {
            return (
                <div className="allWork-card" key={index}>

                    <div className="allWork-base-content">
                        <div className="allWork-card-img">
                            <img src={item.card_img} alt="" />
                        </div>

                        <div className="main-heading">
                            <h2>{item.name}</h2>
                            <p>{item.category}</p>
                        </div>
                    </div>

                    <div className="allWork-sub-content">
                        <p className="description">{item.description}</p>
                                    
                        <p className="tools">
                            {item.tools && item.tools.map((tool, toolIndex) => (
                                <span key={toolIndex}>{tool}</span>
                            ))}
                        </p>
                    </div>
                    
                </div>
            )
        })}
    </div>
  )
}

export default Development