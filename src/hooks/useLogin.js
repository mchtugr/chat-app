import { useContext } from 'react'
import UserContext from '../context/userContext'

export default function useLogin() {
  const { user, login, logout } = useContext(UserContext)

  return { user, login, logout }
}
