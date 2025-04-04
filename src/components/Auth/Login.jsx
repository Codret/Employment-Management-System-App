import React, { useState } from 'react'

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = (e)=>{
    e.preventDefault();
    handleLogin(email, password)
    setEmail("")
    setPassword("")
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 form-container rounded-xl'>
            <form
                onSubmit={(e)=>{
                  submitHandler(e)
                }}
                className='flex flex-col items-center justify-center'>
                <input
                value={email}
                onChange={(e)=> {
                  setEmail(e.target.value)
                  
                }}
                className=' outline-none border-2 border-emerald-600 rounded-full text-xl bg-white  placeholder:text-gray-400' type="email" placeholder='Enter Your email' required/>
                <input
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}

                className=' outline-none border-2 border-emerald-600 rounded-full text-xl bg-white placeholder:text-gray-400' type="password" placeholder='Enter Your Password' required/>
                <button className=' outline-none  bg-emerald-600 text-xl border-none '>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login