import React from 'react'
import './Skills.css'
import { backend_skills, frontend_skills } from '../../../assets/assets'

const Skills = () => {
  return (
    <div className='skills'>
        <div className="skills-container">

            <h2 className="header">What I'm capable of...</h2>

            {/* Frontend technologies */}
            <div className="skills-content">
                <div className="left-side">

                    <p className="frontend-t">Frontend technologies</p>

                    <div className="skills-data-all">

                        {frontend_skills.map((item, index) => {
                            return (
                                <div className="skills-data">
                                    <p className="number">{item.number}</p>
                                    <p className="skill-type">{item.type}</p>
                                </div>
                            )
                        })}
                        
                    </div>
                </div>

                {/* Backend technologies */}
                <div className="right-side">

                    <p className="backend-t">Backend technologies</p>

                    <div className="skills-data-all">

                        {backend_skills.map((item, index) => {
                            return (
                                <div className="skills-data">
                                    <p className="number">{item.number}</p>
                                    <p className="skill-type">{item.type}</p>
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

export default Skills