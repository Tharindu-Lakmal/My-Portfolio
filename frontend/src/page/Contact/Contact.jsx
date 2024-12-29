import React from 'react'
import { useEffect } from 'react';
import Contacts from '../../components/Contact/Contacts'
import PageLoader from '../../components/PageLoader/PageLoader'
import NavBar from '../../components/NavBar/NavBar'

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className='contact'>
      <PageLoader pageName="Contact" />
      <NavBar page = 'pure' />
      <Contacts />
    </div>
  )
}

export default Contact