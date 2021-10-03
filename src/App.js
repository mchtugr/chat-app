import React, { useState, useEffect } from 'react'
import Routes from './routes'
import UserContext from './context/userContext'
import data from './mock-users.json'
import ThemeContext from './context/themeContext'

const App = () => {
  const [user, setUser] = useState(null)
  const [friendList, setFriendList] = useState(data.users)
  const [selectedFriend, setSelectedFriend] = useState(friendList[0])
  const [theme, setTheme] = useState('dark')

  const login = (username) => {
    setUser(username)
    localStorage.setItem('username', JSON.stringify(username))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('username')
  }

  const onSelectedFriend = (id) => {
    const currentFriend = friendList.find((friend) => friend.id === id)
    setSelectedFriend(currentFriend)
  }

  const sendMessage = (id, message) => {
    const targetFriend = friendList.find((friend) => friend.id === id)
    const updatedSelectedFriend = {
      ...targetFriend,
      messages: [...targetFriend.messages, message],
    }
    const restOfFriends = friendList.filter((friend) => friend.id !== id)
    setFriendList([updatedSelectedFriend, ...restOfFriends])
    setSelectedFriend(updatedSelectedFriend)
    const messageContainer = document.querySelector('.message_container')
    messageContainer.scrollTop = messageContainer.scrollHeight + 300
  }

  const onSearch = (keyword) => {
    if (!keyword) {
      setFriendList(data.users)
    } else {
      const updatedFriendList = friendList.filter((friend) => {
        const fullName = friend.first_name + ' ' + friend.last_name
        const myRegex = new RegExp(keyword, 'i')
        console.log(myRegex.test(fullName))
        return myRegex.test(fullName)
      })

      setFriendList(updatedFriendList)
    }
  }

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  useEffect(() => {
    const usernameFromLocalStorage = localStorage.getItem('username')

    if (usernameFromLocalStorage) {
      const userObj = JSON.parse(usernameFromLocalStorage)
      setUser(userObj)
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      <UserContext.Provider
        value={{
          user,
          login,
          logout,
          selectedFriend,
          onSelectedFriend,
          friendList,
          sendMessage,
          onSearch,
        }}
      >
        <Routes />
      </UserContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
