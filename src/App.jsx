import React, { useState, useEffect } from "react"

import Signup from "./components/Signup"
import Signin from "./components/Signin"
import Dashboard from "./components/Dashboard"

import AuthContext from "./contexts/AuthContext"

import './App.css'

export default function App() {

  const storedUsers = JSON.parse(localStorage.getItem("usersData")) || []
  const [allUsers, setAllUsers] = useState(storedUsers)
  const [signin, setSignin] = useState(true)

  function createUser(newUser) {
    setAllUsers(prevUsers => {
      return [...prevUsers, newUser]
    })
  }

  const loggedInUser = allUsers?.find(user => user?.isLoggedIn)

  function loginUser({ username, password }) {
    setAllUsers(prevUsers => {
      return prevUsers.map(user => {
        if (user.isLoggedIn) {
          return {
            ...user,
            isLoggedIn: false
          }
        } else if (user.username === username && user.password === password) {
          return {
            ...user,
            isLoggedIn: true
          }
        } else {
          return user
        }
      })
    })
  }

  function logoutUser() {
    setAllUsers(prevUsers => {
      return prevUsers.map(user => {
        return {
          ...user,
          isLoggedIn: false
        }
      })
    })
  }

  useEffect(() => {
    localStorage.setItem("usersData", JSON.stringify(allUsers))
  }, [allUsers])

  const contextValue = {
    allUsers,
    createUser,
    loggedInUser,
    loginUser,
    logoutUser,
    setSignin
  }

  return (
    <AuthContext.Provider value={contextValue}>
      {
        loggedInUser ? (
          <Dashboard />
        ) : (
          signin ? (
            <Signin />
          ) : (
            <Signup />
          )
        )
      }
    </AuthContext.Provider>
  )
}
