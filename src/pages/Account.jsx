import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
const Account = () => {
  return (
    <div>
    <div className='login1' >
      <Header/>
       <div className='login'>
        <p>Login</p>
       </div>
        <div className='email'>
         <input type='text' placeholder='Email' className='email-input' />
        </div>
        <div className='password'>
        <input type='text' placeholder='Password' className='pass-input' />
        </div>
        <p><u>Forgot your Password?</u></p>
       <button className='login1-button'>
        Sign in
       </button>
       <p><u>Create account</u></p>
    </div>
    <br /><br />
    <Footer/>
    </div>
  )
}

export default Account
