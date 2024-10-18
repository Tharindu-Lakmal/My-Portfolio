import React from 'react'
import "./Contact.css"
import Contacts from '../../components/Contact/Contacts'
import PageLoader from '../../components/PageLoader/PageLoader'

const Contact = () => {
  return (
    <div className='contact'>
      <PageLoader pageName="Contact" />
        <Contacts />
    </div>
  )
}

export default Contact