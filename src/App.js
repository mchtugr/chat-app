import React, { useState, useEffect } from 'react'
import Routes from './routes'
import UserContext from './context/userContext'
import data from './mock-users.json'

const App = () => {
  const [user, setUser] = useState(null)
  const [friendList, setFriendList] = useState(data.users)
  const [selectedFriend, setSelectedFriend] = useState(friendList[0])

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
    // const updatedFriendList = friendList.map((friend) => {
    //   if (friend.id === id) {
    //     setSelectedFriend({
    //       ...friend,
    //       messages: [...friend.messages, message],
    //     })
    //     return { ...friend, messages: [...friend.messages, message] }
    //   } else {
    //     return friend
    //   }
    // })

    // setFriendList(updatedFriendList)
    const messageContainer = document.querySelector('.message_container')
    messageContainer.scrollTop = messageContainer.scrollHeight + 300
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
        friendList,
        sendMessage,
      }}
    >
      <Routes />
    </UserContext.Provider>
  )
}

export default App
