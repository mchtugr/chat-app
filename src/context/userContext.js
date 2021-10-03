import { createContext } from 'react'

const UserContext = createContext({
  user: null,
  friendList: [],
  selectedFriend: null,
  onSelectedFriend: () => {},
  login: () => {},
  logout: () => {},
  sendMessage: () => {},
  onSearch: () => {},
})

export default UserContext
