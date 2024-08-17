import React from 'react'
import "../Pages/CSS/LoginSignUp.css"
const LoginSignUp = () => {
  return (
    <div className='LoginSignUp-page'>
     <div className="LoginSignUp-container">
      <h1>Sign Up </h1>
      <div className="loginSignUp-fields">
        <input type="text" placeholder='Name' />
        <input type="email"  placeholder='Email'/>
        <input type="password" placeholder='Password' />
      </div>
      <button className='continue'>Continue</button>
      <p className='agree'>Already have an account?<span>Login here</span></p>
      <div className="LoginSignUp-agree">
        <button type='checkbox' name='' id=''></button>
        <p>By continuing I agree with the terms and policy</p>
      </div>
     </div>
    </div>
  )
}

export default LoginSignUp
