import React, { useContext } from 'react'
import AuthContext from '../contexts/AuthContext'

const Dashboard = () => {
  const { loggedInUser, logoutUser } = useContext(AuthContext)
  return (
    <section>
      <div className="users-data">
        <h2 className="header">Welcome back Victor!</h2>
        <div className="details">
          <div className="detail">
            <p>First Name:</p>
            <h3>{loggedInUser.firstName}</h3>
          </div>
          <div className="detail">
            <p>Last Name:</p>
            <h3>{loggedInUser.lastName}</h3>
          </div>
          <div className="detail">
            <p>Username:</p>
            <h3>{loggedInUser.username}</h3>
          </div>
          <div className="detail">
            <p>Remember Me:</p>
            <h3>{loggedInUser.rememberMe ? "Yes" : "No"}</h3>
          </div>
        </div>
      </div>
      <button className="logout-button" onClick={logoutUser}>Logout</button>
    </section>
  )
}

export default Dashboard