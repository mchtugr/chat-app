import React, { useState, useEffect } from 'react'
import UserContext from './context/userContext'
import ThemeContext from './context/themeContext'
import Routes from './routes'
import data from './mock-users.json'

const App = () => {
  const [user, setUser] = useState(null)
  const [friendList, setFriendList] = useState(data.users)
  const [selectedFriend, setSelectedFriend] = useState(friendList[0])
  const [theme, setTheme] = useState('light')

  // login user
  const login = (username) => {
    setUser(username)
    // saves user to local storage
    localStorage.setItem('username', JSON.stringify(username))
  }

  // logout user
  const logout = () => {
    setUser(null)
    localStorage.removeItem('username')
  }

  // select currentFriend to display messages/info
  const onSelectedFriend = (id) => {
    const currentFriend = friendList.find((friend) => friend.id === id)
    setSelectedFriend(currentFriend)
  }

  // send messages to current friend
  const sendMessage = (id, message) => {
    const targetFriend = friendList.find((friend) => friend.id === id)
    // updates message list
    const updatedSelectedFriend = {
      ...targetFriend,
      messages: [...targetFriend.messages, message],
    }
    const restOfFriends = friendList.filter((friend) => friend.id !== id)
    // update state to save messages
    setFriendList([updatedSelectedFriend, ...restOfFriends])
    setSelectedFriend(updatedSelectedFriend)

    // scroll to bottom when new messages appear if content overflow
    const messageContainer = document.querySelector('.message_container')
    messageContainer.scrollTop = messageContainer.scrollHeight + 300
  }

  // search friends
  const onSearch = (keyword) => {
    // if search is cleared list all friends
    if (!keyword) {
      setFriendList(data.users)
    } else {
      const updatedFriendList = friendList.filter((friend) => {
        const fullName = friend.first_name + ' ' + friend.last_name
        // used regex to ignore casing
        const myRegex = new RegExp(keyword, 'i')
        console.log(myRegex.test(fullName))
        return myRegex.test(fullName)
      })

      setFriendList(updatedFriendList)
    }
  }

  // change themes
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  // check whether there is user on page refresh
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
