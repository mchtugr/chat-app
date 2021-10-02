import React, { useContext } from 'react'
import styles from './ChatHeader.module.css'
import UserContext from '../../context/userContext'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'

const ChatHeader = () => {
  const { selectedFriend } = useContext(UserContext)

  const fullName = selectedFriend.first_name + ' ' + selectedFriend.last_name
  return (
    <div className={styles.container}>
      <div className={styles.user_detail_container}>
        <div className={styles.img_container}>
          <img
            src={`/avatars/${selectedFriend.username}.jpeg`}
            alt='avatar'
            className={styles.avatar}
          />
        </div>
        <div className={styles.username}>{fullName}</div>
      </div>
      <div className={styles.icon_container}>
        <HiOutlineDotsHorizontal />
      </div>
    </div>
  )
}

export default ChatHeader
