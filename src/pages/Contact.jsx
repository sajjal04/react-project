import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
const Contact = () => {
  return (
    <div className='container-fliuid'>
      <Header/>
      <br />
      <div className='contact-page'>
      <h1>Contact Us</h1>
      <form className='contact-form'>
        <div className='form-row'>
        <input type="text" placeholder='Name *' required/>
        <input type="text" placeholder='Email *' required/>
        </div>
        <div className='form-row'>
        <input type="text" placeholder='Phone/Whatsapp number *' required/>
        </div>
        <div className='form-row'>
       <textarea placeholder='Your Message' rows='5' required></textarea>
        </div>
        <div className='form-row'>
            <button type='submit'>Send</button>
        </div>
      </form>
      </div>
      <br /><br />
      <Footer/>
    </div>
  )
}

export default Contact
