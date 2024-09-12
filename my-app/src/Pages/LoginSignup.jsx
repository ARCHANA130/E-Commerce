import React from 'react'
import './CSS/login.css'
import { useState } from 'react'
const LoginSignup = () => {
  const [state, setstate]=useState('Login');
  const [formData, setformData]=useState({
    username:"",
    password:"",
    email:""
  })
  const changehandler=(e)=>{
    setformData({...formData, [e.target.name]:e.target.value})
  }
  const login=async ()=>{
     console.log('Login func execute', formData)
     let response;
     await fetch('http://localhost:4000/login', {
       method: 'POST',
       headers: {Accept:'application/form-data','Content-Type': 'application/json'},
       body: JSON.stringify(formData)
     }).then(res=>res.json()).then((data)=>response=data)
     if(response.success){
        localStorage.setItem('auth-token',response.token)
        window.location.replace("/");
     }else{
       alert(response.error);
     }

  }
  const signup=async ()=>{
    console.log('sign up executed',formData)
    let response;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {Accept:'application/form-data','Content-Type': 'application/json'},
      body: JSON.stringify(formData)
    }).then(res=>res.json()).then((data)=>response=data)
    if(response.success){
       localStorage.setItem('auth-token',response.token)
       window.location.replace("/");
    }else{
      alert(response.message);
    }
    
  }
  return (
    <div className='loginsingnup'>
      <div className="container">
        <h1>{state}</h1>
        <div className="login-field">
         {state==='Sign Up'?<input name='username' value={formData.username} onChange={changehandler} type="text" placeholder='Your Name' />:<></>}
          <input name='email' value={formData.email} onChange={changehandler} type="email" placeholder='Email Address' />
          <input name='password' value={formData.password} onChange={changehandler} type="password" placeholder='Password' />
        </div> <button onClick={()=>{state==='Login'?login():signup()}}>Continue</button>
      {state==='Sign Up'?<p className="login">Already have an account? <span  onClick={()=>{setstate('Login')}}>Login here</span></p>:<p className="login">Create an Account? <span onClick={()=>{setstate('Sign Up')}}>Click here</span></p>}   
        
          <div className="login-agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
      </div>
    </div>
  )
}

export default LoginSignup
