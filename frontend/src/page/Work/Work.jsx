import React from 'react'
import "./Work.css"
import WorkHeader from '../../components/Work/WorkHeader/WorkHeader'
import Footer from '../../components/Footer/Footer'
import PageLoader from '../../components/PageLoader/PageLoader'
import NavBar from '../../components/NavBar/NavBar'

const Work = () => {
  return (
    <div className='work-page'>
      <PageLoader pageName="Work" />
      <NavBar page="work-page" />
      <WorkHeader />
      <Footer />
    </div>
  )
}

export default Work