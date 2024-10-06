import React from 'react'
import "./Home.css"
import Hero from '../../components/Home/Hero/Hero'
import Intro from '../../components/Home/Intro/Intro'
import Skills from '../../components/Home/Skills/Skills'
import Work from '../../components/Work/Work'

const Home = () => {
  return (
    <div className='home'>
        <Hero />
        <Intro />
        <Skills />
        <Work />
    </div>
  )
}

export default Home