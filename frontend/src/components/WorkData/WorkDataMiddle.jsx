import React from 'react'
import './WorkDataMiddle.css'

const WorkDataMiddle = ({work}) => {

  return (
    <div className='workdatamiddle'>
        <div className="workdatamiddle-container">

            <div className="workdatamiddle-container-data">
                <ul>
                    {work?.key_points?.map((item, index) => {
                        return (
                            <li>
                                <div className="middle-data" key={index}>
                                    <div className="deader">
                                        <img src={item.icon} alt="" />
                                        <h2>{item.topic}</h2>
                                    </div>
                                    <hr />
                                    <p>{item.desc}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default WorkDataMiddle