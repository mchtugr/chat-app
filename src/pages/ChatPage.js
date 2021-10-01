import React from 'react'
import LeftScreen from '../components/LeftScreen'
import RightScreen from '../components/RightScreen/RightScreen'
import useLogin from '../hooks/useLogin'
import { Redirect } from 'react-router-dom'

const ChatPage = () => {
  const { user } = useLogin()

  if (!user) {
    return <Redirect to='/login' />
  }
  return (
    <div className='page_container'>
      <LeftScreen />
      <RightScreen />
    </div>
  )
}

export default ChatPage
