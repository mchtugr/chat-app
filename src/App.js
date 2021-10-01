import React, { useState, useEffect } from 'react'
import Routes from './routes'
import UserContext from './context/userContext'
import data from './mock-users.json'

const App = () => {
  const [user, setUser] = useState(null)
  const [selectedFriend, setSelectedFriend] = useState({})

  const login = (username) => {
    setUser(username)
    localStorage.setItem('username', JSON.stringify(username))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('username')
  }

  const onSelectedFriend = (friend) => {
    setSelectedFriend(selectedFriend)
  }

  useEffect(() => {
    const usernameFromLocalStorage = localStorage.getItem('username')

    if (usernameFromLocalStorage) {
      const userObj = JSON.parse(usernameFromLocalStorage)
      setUser(userObj)
    }
  }, [])

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
        selectedFriend,
        onSelectedFriend,
        friendList: data.users,
      }}
    >
      <Routes />
    </UserContext.Provider>
  )
}

export default App
