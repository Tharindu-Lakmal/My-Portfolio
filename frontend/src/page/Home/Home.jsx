import React from 'react'
import "./Home.css"
import Hero from '../../components/Home/Hero/Hero'
import Intro from '../../components/Home/Intro/Intro'
import Skills from '../../components/Home/Skills/Skills'
import Work from '../../components/Home/Work/Work'
import ImageSlider from '../../components/Home/ImageSlider/ImageSlider'
import Footer from '../../components/Footer/Footer'
import PageLoader from '../../components/PageLoader/PageLoader'

const Home = () => {
  return (
    <div className='home'>
        <PageLoader />
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