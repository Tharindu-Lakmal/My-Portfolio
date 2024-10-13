import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contacts.css'
import { assets } from '../../assets/assets'

const Contacts = () => {

  // input control
  
  const [inputValue, setInputValues] = useState({
    user_name: '',
    user_email: '',
    user_company: '',
    user_need: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValue,
      [name]: value
    });
  };




  // mail Js

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs
      .sendForm('service_5tzgcim', 'template_wzfogcf', form.current, {
        publicKey: 'wDCkqO0-WBqsdV0ic',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          console.log('Mail send successfully');

          window.location.reload();
        },
        (error) => {
          console.log('FAILED...', error.text);
          console.log('Mail failed to sent');
        },
      );
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
                    </div>
                  </div>

                  <div className="form-input">
                    <span className='list-number'>02</span>
                    <div className="form-data">
                      <label className={`label ${inputValue.user_email ? 'label-active' : ''}`}>
                        What is your email?
                      </label>
                      <input onChange={handleInputChange} value={inputValue.user_email} type="email" name="user_email" placeholder='kasuntharuka@gmail.com' />
                    </div>
                  </div>

                  <div className="form-input">
                    <span className='list-number'>03</span>
                    <div className="form-data">
                      <label className={`label ${inputValue.user_company ? 'label-active' : ''}`}>
                        What is your location?
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
                      </div>
                    </div>
                  </div>

                  <div className="input-tbn">
                    <input className='btn-active' type="submit" value="Send" />
                  </div>

                </form>

              </div>
            </div>

            <div className="contact-footer">
              <a href='#'>tharindulakmal.k8@gmail.com</a>
              <div className="social">
                <iframe src="https://lottie.host/embed/fff8f992-0dd2-479c-92ac-0f69f1dfa53d/rXfmeRCLiA.json"></iframe>
                <a href='https://linkedin.com/in/tharindu-lakmal-1b09022a2' target='_blank' className="social-link">LinkdIn</a>
                <a href='https://github.com/Tharindu-Lakmal' target='_blank' className="social-link">Github</a>
              </div>
            </div>

        </div>
    </div>
  )
}

export default Contacts