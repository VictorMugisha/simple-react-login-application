import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Dashboard from "./Dashboard"

const Signup = () => {
    const [signupData, setSignupData] = useState({
        id: '',
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        repeatPassword: '',
        rememberMe: false,
        isLoggedIn: false
    });

    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

    const [users, setUsers] = useState(() => {
        // Initializing the users state with data from localStorage, if available
        const storedUsers = localStorage.getItem('usersData');
        return storedUsers ? JSON.parse(storedUsers) : [];
    });

    function handleChange(event) {
        const { name, type, value, checked } = event.target;
        setSignupData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    }

    function validatePasswords(pwd1, pwd2) {
        return pwd1 === pwd2;
    }

    function handleSubmit(event) {
        event.preventDefault();

        const { firstName, lastName, username, password, repeatPassword, rememberMe } = signupData;

        if (!validatePasswords(password, repeatPassword)) {
            alert('Passwords need to be the same!!');
            return;
        }

        const realData = {
            id: nanoid(),
            firstName,
            lastName,
            username,
            password,
            rememberMe,
            isLoggedIn: true
        };

        // Retrieving stored users and check for possible existing username
        const usersStored = JSON.parse(localStorage.getItem('usersData')) || [];

        if (usersStored.some(user => user.username === username)) {
            alert('Username already exists');
            return;
        }

        // Updating state and localStorage
        const updatedUsers = [realData, ...usersStored];
        setUsers(updatedUsers);
        localStorage.setItem('usersData', JSON.stringify(updatedUsers));


        // Log user in
        setIsUserLoggedIn(true)
    }

    return (
        <section>
            {
                isUserLoggedIn ?
                <Dashboard user={users[0]} logoutSession={setIsUserLoggedIn} /> :
                <div className="signup-form">
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
                </div>
            }
        </section>
    );
}

export default Signup;
