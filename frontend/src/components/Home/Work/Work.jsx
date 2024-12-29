import React from 'react'
import './Work.css'
import { all_work, top_work } from '../../../assets/assets'
import CommonBtn from '../../btn/CommonBtn'
import { NavLink } from 'react-router-dom'


const Work = () => {

    let len = all_work.length;

  return (
    <div className='works'>
        <div className="work-container">

            <h2 className="header">Recent work</h2>

            <div className="works-content">
                {top_work.map((item, index) => {
                    return (
                        <NavLink to={window.innerWidth < 992 ? `/work/${item?.name}` : ''}>
                        <div className="work" key={index}>

                            <div className="work-img">
                                {/* <div className="type"><img src={item.icon} alt="" /><p>{item.type}</p></div> */}
                                    {/* <a href={item.Link} target='_blank'> */}
                                        <div className="view-btn" href={item.Link}>
                                            <NavLink to={window.innerWidth > 992 ? `/work/${item?.name}` : ''}>
                                                <button>View</button>
                                            </NavLink>
                                        </div>
                                    {/* </a> */}
                                <img src={item.card_img} alt="" />
                            </div>

                            <div className="work-content">

                                <div className="work-top">
                                    <p className="category">{item.category}</p>
                                    <h2 className="name">{item.name}</h2>
                                </div>
                                {/* <div className="work-bottom">
                                    <p className="description">{item.description}</p>
                                    
                                    <p className="tools">
                                        {item.tools && item.tools.map((tool, toolIndex) => (
                                            <span key={toolIndex}>{tool}</span>
                                        ))}
                                    </p>
                                    
                                </div> */}

                            </div>

                        </div>
                        </NavLink>
                    )
                })}
            </div>

            <CommonBtn title='More work' path='/work' len={len} width='fit' />

        </div>
    </div>
  )
}

export default Work