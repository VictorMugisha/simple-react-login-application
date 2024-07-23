import React, { useState } from 'react'

const Signin = () => {
  const [signinData, setSigninData] = useState({
    username: '',
    password: ''
  })
  function handleChange(event) {
    const { name, value } = event.target
    setSigninData(prevData => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }
  
  return (
    <section>
      <div className="signup-form">
        <div className="header">
          <h2>Log Into Your Account</h2>
        </div>
        <form className="form-container">
          <div className="input">
            <p>Username</p>
            <input
              type="text"
              placeholder="Enter Your Username"
              name="username"
              onChange={handleChange}
              value={signinData.username}
            />
          </div>
          <div className="input">
            <p>Password</p>
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              onChange={handleChange}
              value={signinData.password}
            />
          </div>
          <div>
            <button className="signup-btn" type='submit'>Signin</button>
          </div>
          <div className="signin-section">
            <p>Or, don't have an account yet!</p>
            <button type='button'>Create Account</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Signin