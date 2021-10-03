import React, { useContext } from 'react'
import styles from './MessageBox.module.css'
import UserContext from '../../context/userContext'
import { BiArrowToTop } from 'react-icons/bi'
const MessageBox = () => {
  const { selectedFriend } = useContext(UserContext)
  const handleScroll = () => {
    // window.scrollTo(0, 0)
    document.querySelector('.scroll_btn').scrollTop = 0
  }

  return (
    <div className={`${styles.container} message_container`}>
      {selectedFriend?.messages.map((msg) => {
        const messageClass =
          msg.sender === selectedFriend.id ? 'message_received' : 'message_sent'
        return (
          <div key={msg.id} className={styles[messageClass]}>
            {msg.text}
          </div>
        )
      })}
      <div
        className={`${styles.icon_container} scroll_btn`}
        onClick={handleScroll}
      >
        <BiArrowToTop size='40px' />
      </div>
    </div>
  )
}

export default MessageBox
