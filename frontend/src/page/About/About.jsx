import React from 'react'
import { useEffect } from 'react';
import AboutHeader from '../../components/About/AboutHeader/AboutHeader'
import Footer from '../../components/Footer/Footer'
import PageLoader from '../../components/PageLoader/PageLoader'
import NavBar from '../../components/NavBar/NavBar'

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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