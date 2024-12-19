import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './page/Home/Home';
import Work from './page/Work/Work';
import About from './page/About/About';
import Contact from './page/Contact/Contact';
import ScrollBack from './components/ScrollBack/ScrollBack';

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

  return (
    <div className="app">

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
    </div>
  );
}

export default App;
