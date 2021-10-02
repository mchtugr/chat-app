import React from 'react'
import styles from './RightScreen.module.css'
import ChatHeader from '../ChatHeader'
import MessageBox from '../MessageBox'
import MessageForm from '../MessageForm'

const RightScreen = () => {
  return (
    <div className={styles.container}>
      <ChatHeader />
      <MessageBox />
      <MessageForm />
    </div>
  )
}

export default RightScreen
