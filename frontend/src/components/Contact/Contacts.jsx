import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contacts.css'
import { assets } from '../../assets/assets'
import NavLinkBtn from '../btn/NavLinkBtn';

const Contacts = () => {

  // input control
  
  const [inputValue, setInputValues] = useState({
    user_name: '',
    user_email: '',
    user_company: '',
    user_need: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValue,
      [name]: value
    });

    setErrors({
      ...errors,
      [name]: '' // Clear error message when user starts typing
    });
  };


  // Regex to validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  // Validate function
  const validateForm = () => {
    const newErrors = {};
    if (!inputValue.user_name) {
      newErrors.user_name = 'Please fill in your name.';
    }
    if (!inputValue.user_email) {
      newErrors.user_email = 'Please fill in your email.';
    } else if (!emailRegex.test(inputValue.user_email)) {
      newErrors.user_email = 'Please provide a valid email address.';
    }
    if (!inputValue.message) {
      newErrors.message = 'Please leave a message.';
    }

    setErrors(newErrors);
    
    // Check if there are no errors
    return Object.keys(newErrors).length === 0;
  };




  // mail Js

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    // Validate form before sending
    if (validateForm()) {
      emailjs
        .sendForm('service_5tzgcim', 'template_wzfogcf', form.current, {
          publicKey: 'wDCkqO0-WBqsdV0ic',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            console.log('Mail sent successfully');
            window.location.reload();
          },
          (error) => {
            console.log('FAILED...', error.text);
            console.log('Mail failed to send');
          },
        );
    }
  };


  return (
    <div className='contact'>
        <div className="contact-container">

            <div className="contact-content">
              <div className="contact-header">
                <h3>
                  <img src={assets.check} alt="" />
                  <span>Let’s collaborate on your next project!</span>
                </h3>
              </div>

              <div className="contact-form">

                <form ref={form} autoComplete="off" onSubmit={sendEmail}>
                  
                  <div className="form-input">
                    <span className='list-number'>01</span>
                    <div className="form-data">
                      <label className={`label ${inputValue.user_name ? 'label-active' : ''}`}>
                        What is your name?
                      </label>
                      <input onChange={handleInputChange} value={inputValue.user_name} type="text" name="user_name" placeholder='Kasun Tharuka' />
                      {errors.user_name && <p className="error-message">{errors.user_name}</p>}
                    </div>
                  </div>

                  <div className="form-input">
                    <span className='list-number'>02</span>
                    <div className="form-data">
                      <label className={`label ${inputValue.user_email ? 'label-active' : ''}`}>
                        What is your email?
                      </label>
                      <input onChange={handleInputChange} value={inputValue.user_email} type="email" name="user_email" placeholder='kasuntharuka@gmail.com' />
                      {errors.user_email && <p className="error-message">{errors.user_email}</p>}
                    </div>
                  </div>

                  <div className="form-input">
                    <span className='list-number'>03</span>
                    <div className="form-data">
                      <label className={`label ${inputValue.user_company ? 'label-active' : ''}`}>
                        What is your location? <span className='Optional'>(Optional)</span>
                      </label>
                      <input onChange={handleInputChange} value={inputValue.user_company} type="text" name="user_company" placeholder='Kandy' />
                    </div>
                  </div>

                  <div className="form-input">
                    <span className='list-number'>04</span>
                    <div className="form-data">
                      <label className={`label ${inputValue.user_need ? 'label-active' : ''}`}>
                        What is your need?
                      </label>
                      <input onChange={handleInputChange} value={inputValue.user_need} type="text" name="user_need" placeholder='Web design, Web development' />
                    </div>
                  </div>

                  <div className="form-input">
                    <span className='list-number'>05</span>
                    <div className="form-data">
                      <label className={`label ${inputValue.message ? 'label-active' : ''}`}>
                        Leave a message!
                      </label>
                      <div className='textArea'>
                        <textarea onChange={handleInputChange} value={inputValue.message} name="message" placeholder='Hello Lakmal, can you help me with...' />
                        {errors.message && <p className="error-message">{errors.message}</p>}
                      </div>
                    </div>
                  </div>

                  <div className="input-tbn">
                    <input className='active-btn' type="submit" value="Send" />
                  </div>

                </form>

              </div>
            </div>

            <div className="contact-footer">
              <NavLinkBtn type='tharindulakmal.k8@gmail.com' link='mailto:tharindulakmal.k8@gmail.com' />

              <div className="social">
                <iframe src="https://lottie.host/embed/fff8f992-0dd2-479c-92ac-0f69f1dfa53d/rXfmeRCLiA.json"></iframe>
                <NavLinkBtn type='LinkedIn' link='https://www.linkedin.com/in/tharindulakmal99' />
                <NavLinkBtn type='GitHub' link='https://github.com/Tharindu-Lakmal' />
              </div>
            </div>

        </div>
    </div>
  )
}

export default Contacts