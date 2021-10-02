import React, { useContext } from 'react'
import UserContext from '../context/userContext'

import { Redirect } from 'react-router'

const StartPage = () => {
  const { user } = useContext(UserContext)
  if (!user) {
    return <Redirect to='/login' />
  }
  return <Redirect to='/chat' />
}

export default StartPage
