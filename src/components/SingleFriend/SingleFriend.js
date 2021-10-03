import React, { useContext } from 'react'
import styles from './SingleFriend.module.css'
import UserContext from '../../context/userContext'

const SingleFriend = (props) => {
  const { friend } = props
  const { onSelectedFriend } = useContext(UserContext)
  const fullName = friend.first_name + ' ' + friend.last_name
  const lastMessage = friend.messages[friend.messages.length - 1].text
  const handleClick = (id) => {
    onSelectedFriend(id)
  }
  return (
    <div className={styles.container} onClick={() => handleClick(friend.id)}>
      <div className={styles.img_container}>
        <img
          src={`/avatars/${friend.username}.jpeg`}
          alt='avatar'
          className={styles.avatar}
        />
      </div>
      <div className={styles.text_container}>
        <div className={styles.username}>{fullName}</div>
        <div className={styles.last_message}>
          {lastMessage.length <= 25
            ? lastMessage
            : `${lastMessage.slice(0, 25)} ...`}
        </div>
      </div>
    </div>
  )
}

export default SingleFriend
