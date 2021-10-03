import React, { useContext } from 'react'
import styles from './MessageBox.module.css'
import UserContext from '../../context/userContext'
import ThemeContext from '../../context/themeContext'
const MessageBox = () => {
  const { theme } = useContext(ThemeContext)
  const { selectedFriend } = useContext(UserContext)

  return (
    <div
      className={`${styles.container} ${
        theme === 'dark' && styles.container_dark
      } message_container`}
    >
      {selectedFriend?.messages.map((msg) => {
        let anotherMessageClass
        {
          /* check whether message is sent or received and style accordingly */
        }
        const messageClass =
          msg.sender === selectedFriend.id ? 'message_received' : 'message_sent'
        if (theme === 'dark') {
          if (messageClass === 'message_received') {
            anotherMessageClass = 'message_received_dark'
          } else {
            anotherMessageClass = 'message_sent_dark'
          }
        }
        return (
          <div
            key={msg.id}
            className={`${styles[messageClass]} ${styles[anotherMessageClass]}`}
          >
            {msg.text}
          </div>
        )
      })}
    </div>
  )
}

export default MessageBox
