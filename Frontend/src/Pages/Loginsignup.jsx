import { useState } from 'react';

const Loginsignup = () => {

  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  })


  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const login = async () => {
    let responseData;
    await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data)
    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token)
      window.location.replace("/")
    }
    else {
      alert(responseData.errors)
    }
  }

  const signup = async () => {
    let responseData;
    await fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data)
    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token)
      window.location.replace("/")
    }
    else {
      alert(responseData.errors)
    }

  }

  return (
    <div className="w-full min-h-[80vh] bg-[#fce3fe] pt-[100px] max-[1280px]:pt-[50px] flex justify-center">
      <div className="w-[580px] h-[600px] max-[1280px]:w-full max-[1280px]:max-w-[500px] max-[1280px]:max-h-[500px]
                  bg-white px-[60px] py-[40px] max-[800px]:px-[30px] max-[800px]:py-[20px]">

        <h1 className="text-2xl font-semibold my-5 max-[1280px]:my-2.5 max-[800px]:text-xl">
          {state}</h1>
        <div className="flex flex-col gap-[30px] mt-[30px] max-[1280px]:gap-[20px] max-[1280px]:mt-[20px]">
          {state === "Sign Up" &&
            <input type="text" name='username' value={formData.username} onChange={changeHandler} placeholder='Your Name' className="w-full h-[72px] max-[1280px]:w-[93%] max-[1280px]:h-[65px] max-[800px]:h-[50px] px-5 rounded-md border border-[#888] text-xl outline-none" />}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' className="w-full h-[72px] max-[1280px]:w-[93%] max-[1280px]:h-[65px] max-[800px]:h-[50px] px-5 rounded-md border border-[#888] text-xl outline-none" />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' className="w-full h-[72px] max-[1280px]:w-[93%] max-[1280px]:h-[65px] max-[800px]:h-[50px] px-5 rounded-md border border-[#888] text-xl outline-none" />
        </div>
        <button onClick={() => { state === "Login" ? login() : signup() }} className=' className="w-[580px] max-[1280px]:w-full h-[72px] max-[1280px]:h-[65px] max-[800px]:h-[50px] mt-[30px] max-[1280px]:mt-[20px] bg-[#ef1c1c] text-white text-2xl rounded-md cursor-pointer hover:opacity-90 transition"
    >'>Continue</button>
        <p className="mt-5 text-[#5c5c5c] text-xl max-[1280px]:text-lg font-medium">
          {state === "Sign Up" ? (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setState("Login")}
                className="text-[#ef1c1c] font-semibold cursor-pointer"
              >
                Log in here
              </span>
            </>
          ) : (
            <>
              Create an account?{" "}
              <span
                onClick={() => setState("Sign Up")}
                className="text-[#ef1c1c] font-semibold cursor-pointer"
              >
                Click Here
              </span>
            </>
          )}
        </p>
        <div className="flex items-center gap-5 mt-[25px] text-[#5c5c5c] text-xl max-[1280px]:text-lg font-medium">
          <input type="checkbox" name='' id='' />
          <p>By Continuing, i agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default Loginsignup
