import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home/Home'
import Work from './page/Work/Work'
import About from './page/About/About'
import Contact from './page/Contact/Contact'
import PageLoader from './components/PageLoader/PageLoader'

import ScrollBack from './components/ScrollBack/ScrollBack'

function App() {
  

  return (
    <div className='app'>

      <PageLoader pageName={'home'} />

      <ScrollBack />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/work' element={<Work />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
