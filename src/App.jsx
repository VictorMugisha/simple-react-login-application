import React from "react"
import Signup from "./components/Signup"
import Signin from "./components/Signin"
import AuthContext from "./contexts/AuthContext"

import './App.css'

export default function App() {

  const storedUsers = JSON.parse(localStorage.getItem("usersData")) || []
  const [allUsers, setAllUsers] = useState(storedUsers)
  
  function createUser(newUser) {
    setAllUsers(prevUsers => {
      return [...prevUsers, newUser]
    })
    localStorage.setItem(JSON.stringify(allUsers))
  }
  
  const loggedInUser = allUsers?.find(user => user.isLoggedIn)

  function loginUser(username) {
    setAllUsers(prevUsers => {
      return prevUsers.map(user => {
        if (user.isLoggedIn) {
          return {
            ...user,
            isLoggedIn: false
          }
        } else if (user.username === username) {
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

  
  // const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  // // const [hasAccount, setHasAccount] = useState(true)

  // const [users, setUsers] = useState(() => {
  //   // Initializing the users state with data from localStorage, if available
  //   const storedUsers = localStorage.getItem('usersData');
  //   return storedUsers ? JSON.parse(storedUsers) : [];
  // });


  // function handleSignupSubmit() {
  //       // Retrieving stored users and check for possible existing username
  //   const usersStored = JSON.parse(localStorage.getItem('usersData')) || [];

  //   if (usersStored.some(user => user.username === username)) {
  //     alert('Username already exists');
  //     return;
  //   }

  //   // Updating state and localStorage
  //   const updatedUsers = [realData, ...usersStored];
  //   setUsers(updatedUsers);
  //   localStorage.setItem('usersData', JSON.stringify(updatedUsers));
  // }

  const contextValue = {
    allUsers,
    createUser,
    loggedInUser,
    loginUser
  }


  return (
    <AuthContext.Provider value={contextValue}>
      <Signup />
    </AuthContext.Provider>
  )
}
