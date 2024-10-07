import React from "react";
import "../Pages/CSS/LoginSignUp.css";
import { useState } from "react";
const LoginSignUp = () => {
  const [login_SignUp, setLoginSignUp] = useState("Sign Up");
const [formData,setformData]=useState({
name:"",
email:"",
password:""
})

const inputChangeHandler=(e)=>{
  setformData({...formData,[e.target.name]:e.target.value})


}

// LOGIN PAGE FUNCTION

const login=async ()=>{

  console.log("Login")
  let result= await fetch('http://localhost:3000/login',{
    method:'POST',
    headers:{
      accept:"application/json",
      'Content-Type':"application/json",
    },
    body:JSON.stringify(formData)
  });
  result=await result.json();

  if(result. success){
    console.log(result.success);
    localStorage.setItem('auth-token',result.token);
   
    window.location.replace('/')
    
  }
  else alert(`${result.error} 😒`)
}
// SIGN UP PAGE FUNTION 
const Sign_Up=async ()=>{
  console.log("Sign Up")
  let result= await fetch('http://localhost:3000/signup',{
    method:'POST',
    headers:{
      accept:"application/json",
      'Content-Type':"application/json",
    },
    body:JSON.stringify(formData)
  });
  result=await result.json();

  if(result. success){
    console.log(result.success);
    localStorage.setItem('auth-token',result.token);
 
    window.location.replace('/')
    
  }
  else alert(`${result.error} 😒`)
}

  return (
    <div className="LoginSignUp-page">
      <div className="LoginSignUp-container">
        <h1>{login_SignUp} </h1>
        <div className="loginSignUp-fields">
          {login_SignUp === "Sign Up" ? (
            <input type="text" name="name" onChange={inputChangeHandler} value={formData.name} placeholder="Name" />
          ) : (
            <></>
          )}
          <input type="email" name="email"  onChange={inputChangeHandler} value={formData.email} placeholder="Email" />
          <input type="password" name="password"  onChange={inputChangeHandler}  value={formData.password} placeholder="Password" />
        </div>
        <button onClick={()=>{login_SignUp==='login'?login():Sign_Up()}} className="continue">Continue</button>
        {login_SignUp === "Sign Up" ? (
          <p className="agree">
            Already have an account?<span style={{cursor:'pointer'}} onClick={()=>setLoginSignUp('login')}>Login here</span>
          </p>
        ) : (
          <p className="agree">
            Ceate an account?<span style={{cursor:'pointer'}} onClick={()=>setLoginSignUp('Sign Up')}>Click here</span>
          </p>
        )}

        <div className="LoginSignUp-agree">
          <button type="checkbox" name="" id=""></button>
          <p>By continuing I agree with the terms and policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
  