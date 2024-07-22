import React, { useState } from 'react'

const Signup = () => {
    const [signupData, setSignupData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        repeatPassword: '',
        rememberMe: false
    })

    function handleChange(event) {
        const { name, type, value } = event.target
        setSignupData(prevData => {
            if (type === "text" || type === "password") {
                return {
                    ...prevData,
                    [name]: value
                }
            } else if (type === "checkbox") {
                return {
                    ...prevData,
                    rememberMe: !prevData.rememberMe
                }
            }
        })
    }

    function handleSubmit(event) {
        
    }


    return (
        <section>
            <div className="header">
                <h2>Create Your Account</h2>
            </div>
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="input">
                    <p>First Name</p>
                    <input
                        type="text"
                        placeholder="First Name"
                        name="firstName"
                        value={signupData.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div className="input">
                    <p>Last Name</p>
                    <input
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={signupData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className="input">
                    <p>Username</p>
                    <input
                        type="text"
                        placeholder="Create Your Username"
                        name="username"
                        value={signupData.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="input">
                    <p>Password</p>
                    <input
                        type="password"
                        placeholder="Enter Your Password"
                        name="password"
                        value={signupData.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="input">
                    <p>Confirm Password</p>
                    <input
                        type="password"
                        placeholder="Repeat Password"
                        name="repeatPassword"
                        value={signupData.repeatPassword}
                        onChange={handleChange}
                    />
                </div>
                <div className="input flex-center">
                    <input
                        type="checkbox"
                        name="rememberMe"
                        checked={signupData.rememberMe}
                        onChange={handleChange}
                    />
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