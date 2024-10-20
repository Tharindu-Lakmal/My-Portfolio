import React from 'react'
import "./Contact.css"
import Contacts from '../../components/Contact/Contacts'
import PageLoader from '../../components/PageLoader/PageLoader'
import NavBar from '../../components/NavBar/NavBar'

const Contact = () => {
  return (
    <div className='contact'>
      <PageLoader pageName="Contact" />
      <NavBar page = 'pure' />
      <Contacts />
    </div>
  )
}

export default Contact