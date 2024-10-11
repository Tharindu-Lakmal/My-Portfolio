import React, { useState } from 'react'
import './WorkHeader.css'
import { assets } from '../../../assets/assets'
import AllWork from '../AllWork/AllWork';
import Design from '../Design/Design';
import Development from '../Development/Development';

const WorkHeader = () => {

    const [currentType, setCurrentType] = useState("all-work");

    const contentMap = {
        "all-work": <AllWork />,
        "design": <Design />,
        "development": <Development />
    };

    console.log(currentType);


  return (
    <div className='workHeader'>
        <div className="workHeader-container">

            <div className="workHeader-content">
                <div className="workHeader-img">
                    <img src={assets.work_img} alt="" />
                </div>

                <div className="workHeader-header">
                    <h3>
                        Creating products with vision and excellence
                    </h3>
                </div>

                <div className="workHeader-btn">
                    <button onClick={() => setCurrentType("all-work")} className={currentType === "all-work"?"btn-active":"btn-empty"}>All</button>
                    <button onClick={() => setCurrentType("design")} className={currentType === "design"?"btn-active":"btn-empty"}>Design</button>
                    <button onClick={() => setCurrentType("development")} className={currentType === "development"?"btn-active":"btn-empty"}>Development</button>
                </div>
            </div>

            {/* <div className={currentType === "all-work"?"all-work":"remove"}>
                <AllWork />
            </div>
            <div className={currentType === "design"?"design":"remove"}>
                <Design />
            </div>
            <div className={currentType === "development"?"development":"remove"}>
                <Development />
            </div> */}

            {/* <div className="work-content-display">
                {contentMap[currentType] || null}
            </div> */}

            <div className={`content-section ${currentType === 'all-work' ? 'active' : ''}`}>
                {currentType === "all-work" && <AllWork />}
            </div>
            <div className={`content-section ${currentType === 'design' ? 'active' : ''}`}>
                {currentType === "design" && <Design />}
            </div>
            <div className={`content-section ${currentType === 'development' ? 'active' : ''}`}>
                {currentType === "development" && <Development />}
            </div>

        </div>
    </div>
  )
}

export default WorkHeader