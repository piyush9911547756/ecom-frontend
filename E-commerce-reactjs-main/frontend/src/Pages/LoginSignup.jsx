import React, { useState } from 'react'
import "../CSS/LoginSignup.css"
import { useNavigate } from 'react-router-dom'

const LoginSignup = () => {
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onHandleSubmit = (e) => {
    e.preventDefault()

    const userData = {
      name:name,
      email:email,
      password:password
    }

    localStorage.setItem("user",JSON.stringify(userData))

    navigate('/')
  }

  return (
    <div className='loginsignup'>
      <form onSubmit={onHandleSubmit} className="loginsignup-container">
        <h1>Sign Up</h1>

        <div className='loginsignup-fields'>
          <input
            type='text'
            placeholder='Your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type='email'
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Continue</button>
        </div>

        <p className="loginsignup-login">
          Already have an account? <span>Login here</span>
        </p>

        <div className='loginsignup-agree'>
          <input type='checkbox' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </form>
    </div>
  )
}

export default LoginSignup
