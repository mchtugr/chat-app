import { createContext } from 'react'

const UserContext = createContext({
  user: null,
  friendList: [],
  selectedFriend: null,
  onSelectedFriend: () => {},
  login: () => {},
  logout: () => {},
})

export default UserContext
