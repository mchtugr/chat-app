import React, { useContext } from 'react'
import styles from './MessageBox.module.css'
import UserContext from '../../context/userContext'
const MessageBox = () => {
  const { selectedFriend } = useContext(UserContext)

  return (
    <div className={`${styles.container} message_container`}>
      {selectedFriend.messages.map((msg) => {
        const messageClass =
          msg.sender === selectedFriend.id ? 'message_received' : 'message_sent'
        return (
          <div key={msg.id} className={styles[messageClass]}>
            {msg.text}
          </div>
        )
      })}
    </div>
  )
}

export default MessageBox
