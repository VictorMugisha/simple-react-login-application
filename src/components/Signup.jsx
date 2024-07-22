import React from 'react'

const Signup = () => {
  return (
    <section>
        <div className="header">
            <h2>Create Your Account</h2>
        </div>
        <form className="form-container">
            <div className="input">
                <p>First Name</p>
                <input type="text" placeholder="First Name" name="firstName" />
            </div>
            <div className="input">
                <p>Last Name</p>
                <input type="text" placeholder="Last Name" name="lastName" />
            </div>
            <div className="input">
                <p>Username</p>
                <input type="text" placeholder="Create Your Username" name="username" />
            </div>
            <div className="input">
                <p>Password</p>
                <input type="password" placeholder="Enter Your Password" name="password" />
            </div>
            <div className="input">
                <p>Confirm Password</p>
                <input type="password" placeholder="Repeat Password" name="repeatPassword" />
            </div>
            <div className="input flex-center">
                <input type="checkbox" name="remeberMe" />
                <p>Remember Me</p>
            </div>
            <div>
                <button className="signup-btn">Create Account</button>
            </div>
        </form>
    </section>
  )
}

export default Signup