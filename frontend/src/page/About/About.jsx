import React from 'react'
import "./About.css"
import AboutHeader from '../../components/About/AboutHeader/AboutHeader'
import Footer from '../../components/Footer/Footer'
import PageLoader from '../../components/PageLoader/PageLoader'
import NavBar from '../../components/NavBar/NavBar'

const About = () => {
  return (
    <div className='about'>
      <PageLoader pageName="About" />
      <NavBar page="about-page" />
      <AboutHeader />
      <Footer />
    </div>
  )
}

export default About