import React from 'react'
import './WorkDetails.css'
import PageLoader from '../../components/PageLoader/PageLoader';
import { all_work } from '../../assets/assets';
import { useParams } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import CircleBtn from '../../components/btn/CircleBtn';
import WorkDataHero from '../../components/WorkData/WorkDataHero';
import WorkDataMiddle from '../../components/WorkData/WorkDataMiddle';
import Workimage from '../../components/WorkData/Workimage';
import WorkDataFooter from '../../components/WorkData/WorkDataFooter';

const WorkDetails = () => {

    const { workName } = useParams();
    const work = all_work.find((item) => item.name === workName);

    
  return (
    <div className='contentdetails'>
        <PageLoader pageName={work.name} />
        <NavBar page = 'dark' />

        <div className="contentdetails-container">
            
            <div className="contentdetails-content">

                <div className="contentdetails-header">
                    <h3>{work.name}</h3>
                </div>

            </div>
            <div className="contentdetails-content-sub">
                <div className="content-data">
                    <p>Category</p>
                    <hr />
                    <ul>
                        <li>{work.category}</li>
                    </ul>
                </div>
                <div className="content-data">
                    <p>Group/Individual: {work.type}</p>
                    <hr />
                    <ul>
                        {work?.team?.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="content-data">
                    <p>Tools & Technologies</p>
                    <hr />
                    <ul>
                        {work?.tools?.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* <div className="live-btn">
                <CircleBtn type='View' link={work.Link} target='_blank' />
            </div> */}

        </div>

        <div className="live-btn">
            <CircleBtn type='View' link={work.Link} target='_blank' />
        </div>

        <div className="hero-content">
                <WorkDataHero work={work} />
        </div>

        <div className="hero-content">
            <WorkDataMiddle work={work} />
        </div>

        
        <Workimage work={work} />

        <WorkDataFooter work={work} />
        

    </div>
  )
}

export default WorkDetails