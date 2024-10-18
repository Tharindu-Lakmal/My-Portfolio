import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home/Home'
import Work from './page/Work/Work'
import About from './page/About/About'
import Contact from './page/Contact/Contact'
import NavBar from './components/NavBar/NavBar'
import PageLoader from './components/PageLoader/PageLoader'

function App() {
  

  return (
    <div className='app'>

      <PageLoader pageName={'home'} />
      <NavBar />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work' element={<Work />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
