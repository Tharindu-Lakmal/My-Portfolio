import React, { useState, useEffect } from 'react';
import './App.css';
import Lenis from '@studio-freight/lenis';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './page/Home/Home';
import Work from './page/Work/Work';
import About from './page/About/About';
import Contact from './page/Contact/Contact';
import ScrollBack from './components/ScrollBack/ScrollBack';
import SmoothScroller from './components/SmoothScroller/SmoothScroller';

function App() {

  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      setIsFirstLoad(false);
    }
  }, [location.pathname]);


  useEffect(() => {
    const routeTitles = {
      '/': 'Tharindu Lakmal — Full Stack Developer & Designer',
      '/home': 'Home — Tharindu Lakmal',
      '/work': 'Work — Tharindu Lakmal',
      '/about': 'About — Tharindu Lakmal',
      '/contact': 'Contact — Tharindu Lakmal',
    };

    // Set the document title
    const currentTitle = routeTitles[location.pathname] || 'Full Stack Developer & Designer';
    document.title = currentTitle;
  }, [location]);



  // smooth scrolling //////////////////////
  const lenis = new Lenis({
    duration: 2,
    smooth: true,
  });
  
  function raf(time) {
    lenis.raf(time); // Update Lenis animation
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  
  // Forward Lenis scroll event
  lenis.on('scroll', ({ scroll }) => {
    window.dispatchEvent(new CustomEvent('lenis-scroll', { detail: scroll }));
  });

  return (
    <div className="app">

      <SmoothScroller >

        {/* <PageLoader /> */}

        <ScrollBack />

        <Routes>
          {isFirstLoad ? (
            <Route path="/" element={<Home />} /> 
          ) : (
            <Route path="/home" element={<Home />} />
          )}
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </SmoothScroller>
    </div>
  );
}

export default App;
