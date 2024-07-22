import React from 'react'

const Dashboard = () => {
  return (
    <section>
      <div className="users-data">
        <h2 className="header">Welcome back Victor!</h2>
        <div className="details">
          <div className="detail">
            <p>First Name:</p>
            <h3>Victor</h3>
          </div>
          <div className="detail">
            <p>Last Name:</p>
            <h3>Mugisha</h3>
          </div>
          <div className="detail">
            <p>Username:</p>
            <h3>VictorMugisha</h3>
          </div>
          <div className="detail">
            <p>Remember Me:</p>
            <h3>Yes</h3>
          </div>
          <div className="detail">
            <p>First Name:</p>
            <h3>Victor</h3>
          </div>
        </div>
      </div>
      <button className="logout-button">Logout</button>
    </section>
  )
}

export default Dashboard