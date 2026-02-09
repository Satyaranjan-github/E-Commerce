import { useState } from 'react';

const Loginsignup = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
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
      setError(responseData.errors)
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
    <div className="min-h-screen bg-[#0b0b0b] flex flex-col lg:flex-row items-center justify-between px-[5%] lg:px-[10%] pt-20 pb-10 gap-16">

      {/* Left Side: Brand Message */}
      <div className="flex-1 text-left space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-600/20">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
          <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.2em]">Live Archive 2026</span>
        </div>
        <h1 className="text-white text-6xl md:text-8xl font-black uppercase italic leading-[0.8] tracking-tighter">
          Unlock the <br /> <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Artifacts.</span>
        </h1>
        <p className="text-zinc-400 max-w-md text-sm md:text-base leading-relaxed tracking-wide uppercase font-light">
          Join the digital collective to access curated utility assets and technical precision tools.
        </p>
      </div>
      {/* Right Side: The Form Card */}
      <div className="w-full max-w-[480px] bg-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-red-600/10">
        <h2 className="text-2xl font-black text-black uppercase italic mb-8 border-b-4 border-red-600 inline-block">
          {state}
        </h2>

        <div className="space-y-4">
          {state === "Sign Up" && (
            <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' className="w-full h-14 px-5 bg-zinc-100 rounded-xl outline-none border-2 border-transparent focus:border-red-600 transition-all font-medium" />
          )}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' className="w-full h-14 px-5 bg-zinc-100 rounded-xl outline-none border-2 border-transparent focus:border-red-600 transition-all font-medium" />
          <div className='relative w-full'>
            <input
              name='password'
              value={formData.password}
              onChange={changeHandler}
              type={passwordVisible ? "text" : "password"}
              placeholder='Password'
              className="w-full h-14 px-5 bg-zinc-100 rounded-xl outline-none border-2 border-transparent focus:border-red-600 transition-all font-medium" />
            <span
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
            >
              {passwordVisible ? "🙈" : "👁️"}
            </span>
          </div>
        </div>
        {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-xl">
            {error}
          </div>
        )}
        <button onClick={() => { state === "Login" ? login() : signup() }} className="w-full h-14 mt-8 bg-red-600 text-white font-black uppercase tracking-widest rounded-xl hover:bg-black transition-all transform hover:-translate-y-1">
          Get Started
        </button>

        <p className="mt-6 text-zinc-500 text-xs font-bold text-center uppercase tracking-tighter">
          {state === "Sign Up" ? "Already a member?" : "Need an account?"}{" "}
          <span onClick={() => setState(state === "Sign Up" ? "Login" : "Sign Up")} className="text-red-600 cursor-pointer hover:underline">
            {state === "Sign Up" ? "Log in here" : "Click Here"}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Loginsignup
