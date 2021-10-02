import React, { useContext, useState } from 'react'
import UserContext from '../../context/userContext'
import styles from './MessageForm.module.css'
import { v4 as uuid } from 'uuid'

const MessageForm = () => {
  const [text, setText] = useState('')
  const { sendMessage, selectedFriend } = useContext(UserContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    const message = {
      id: uuid(),
      text,
      sender: 'current_user',
    }
    if (text) {
      sendMessage(selectedFriend.id, message)
    }

    setText('')
  }
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.input_container}>
          <input
            type='text'
            placeholder='Type'
            value={text}
            className={styles.input}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button type='submit' className={styles.btn}>
          Send
        </button>
      </form>
    </div>
  )
}

export default MessageForm
