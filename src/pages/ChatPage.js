import React from 'react'
import LeftScreen from '../components/LeftScreen'
import RightScreen from '../components/RightScreen/RightScreen'
import useLogin from '../hooks/useLogin'
import { Redirect } from 'react-router-dom'
import ChatHeader from '../components/ChatHeader'
import MessageBox from '../components/MessageBox'
import MessageForm from '../components/MessageForm'

const ChatPage = () => {
  const { user } = useLogin()

  if (!user) {
    return <Redirect to='/login' />
  }
  return (
    <div className='page_container'>
      <LeftScreen />
      <RightScreen>
        <ChatHeader />
        <MessageBox />
        <MessageForm />
      </RightScreen>
    </div>
  )
}

export default ChatPage
