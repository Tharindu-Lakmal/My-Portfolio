import React from 'react'
import { useEffect } from 'react';
import Hero from '../../components/Home/Hero/Hero'
import Intro from '../../components/Home/Intro/Intro'
import Skills from '../../components/Home/Skills/Skills'
import Work from '../../components/Home/Work/Work'
import ImageSlider from '../../components/Home/ImageSlider/ImageSlider'
import Footer from '../../components/Footer/Footer'
import PageLoader from '../../components/PageLoader/PageLoader'
import NavBar from '../../components/NavBar/NavBar'

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className='home'>
        <PageLoader pageName="Home" />
        <NavBar page = 'pure' />
        <Hero />
        <Intro />
        <Skills />
        <Work />
        <ImageSlider />
        <Footer />
    </div>
  )
}

export default Home