import React, { useState } from 'react'
import './WorkHeader.css'
import { assets } from '../../../assets/assets'
import AllWork from '../AllWork/AllWork';
import Design from '../Design/Design';
import Development from '../Development/Development';
import CommonWorkBtn from '../../btn/CommonWorkBtn';

const WorkHeader = () => {

    const [currentType, setCurrentType] = useState("All");

    const contentMap = {
        "all-work": <AllWork />,
        "design": <Design />,
        "development": <Development />
    };

    // console.log(currentType);


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
                    <CommonWorkBtn type={'All'} handleClick={() => setCurrentType("All")} currentType={currentType} />
                    <CommonWorkBtn type={'Design'} handleClick={() => setCurrentType("Design")} currentType={currentType} />
                    <CommonWorkBtn type={'Development'} handleClick={() => setCurrentType("Development")} currentType={currentType} />
                </div>
            </div>


            <div className={`content-section ${currentType === 'All' ? 'active' : ''}`}>
                {currentType === "All" && <AllWork />}
            </div>
            <div className={`content-section ${currentType === 'Design' ? 'active' : ''}`}>
                {currentType === "Design" && <Design />}
            </div>
            <div className={`content-section ${currentType === 'Development' ? 'active' : ''}`}>
                {currentType === "Development" && <Development />}
            </div>

        </div>
    </div>
  )
}

export default WorkHeader