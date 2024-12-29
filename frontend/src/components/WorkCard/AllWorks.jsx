import React from 'react'
import './AllWorks.css'
import { all_work } from '../../assets/assets'
import { NavLink } from 'react-router-dom';

const AllWorks = ({type}) => {

    let project = [];

    if (type === 'All') {
        project = all_work;
    }
    else if (type === 'Design') {
        project = all_work.filter(item => item.category === 'Design');
    } 
    else if (type === 'Development') {
        project = all_work.filter(item => item.category === 'Design & Development');
    }


    

  return (
    <div className='allWorks'>
        {project.map((item, index) => {
            return (
                <NavLink to={window.innerWidth < 992 ? `/work/${item?.name}` : ''}>
                    <div className="allWorks-card" key={index}>
        
                        <div className="allWorks-content">
                            <div className="allWorks-card-img">
                                {/* <div className="type"><img src={item.icon} alt="" /><p>{item.type}</p></div> */}
                                
                                    <a href={item.Link} target='_blank'>
                                        <div className="view-btn">
                                            <NavLink to={`/work/${item?.name}`}>
                                                <button>View</button>
                                            </NavLink>
                                        </div>  
                                    </a>
                                    
                                <img src={item.card_img} alt="" />
                            </div>
        
                            <div className="main-heading">
                                <h2>{item.name}</h2>
                                <hr />
                                <div className='main-heading-bottom'>
                                    <p>{item.category}</p>
                                    <p>{item.type}</p>
                                </div>
                            </div>
                        </div>
                            
                    </div>
                </NavLink>
            )
        })}
    </div>
  )
}

export default AllWorks