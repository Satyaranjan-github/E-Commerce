import React, { useState } from 'react'
import './Loginsignup.css'

const Loginsignup = () => {

   const [state,setState] =useState("Login");
   const [formData,setFormData]=useState({
    username:"",
    password:"",
    email:""
   })


   const changeHandler =(e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})
   }
   
   const login =async ()=>{
     console.log("log in function executed",formData)
     let responseData;
     await fetch('http://localhost:5000/login',{
      method:'POST',
      headers:{
       Accept:'application/form-data',
      'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
     }).then((response)=>response.json()).then((data)=>responseData=data)
    if (responseData.success) {
      localStorage.setItem('auth-token',responseData.token)
      window.location.replace("/")
    }
    else{
      alert(responseData.errors)
    }
   }    



   const signup =async ()=>{
     console.log("sign up function executed",formData)

     let responseData;
     await fetch('http://localhost:5000/signup',{
      method:'POST',
      headers:{
       Accept:'application/form-data',
      'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
     }).then((response)=>response.json()).then((data)=>responseData=data)
    if (responseData.success) {
      localStorage.setItem('auth-token',responseData.token)
      window.location.replace("/")
    }
    else{
      alert(responseData.errors)
    }

   }




  return (
    <div className='login-signup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
         {state === "Sign Up" ?<input type="text" name='username' value={formData.username} onChange={changeHandler} placeholder='Your Name' />:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email"  placeholder='Email Address'/>
          <input  name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password'/>
        </div>
        <button onClick={()=>{state ==="Login"?login():signup()}}>Continue</button>

       {state ==="Sign Up"
       ?<p className="loginsignup-text">
          Already have an account? <span onClick={()=>{setState("Login")}}>Log in here</span>
        </p>
        :<p className="loginsignup-text">
          Create an account? <span onClick={()=>{setState("Sign Up")}}>Click Here</span>
        </p>}
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By Continuing, i agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default Loginsignup
