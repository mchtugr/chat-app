import React, { useContext } from 'react'
import styles from './ChatHeader.module.css'
import UserContext from '../../context/userContext'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import { useHistory } from 'react-router-dom'
import ThemeContext from '../../context/themeContext'

const ChatHeader = () => {
  const { selectedFriend } = useContext(UserContext)
  const { theme } = useContext(ThemeContext)
  const history = useHistory()
  const handleClick = () => {
    // when three dots clicked, redirect to selected user detail page
    history.push(`/user/${selectedFriend.id}`)
  }

  const fullName = selectedFriend?.first_name + ' ' + selectedFriend?.last_name

  return (
    <div
      className={`${styles.container} ${
        theme === 'dark' && styles.container_dark
      }`}
    >
      <div className={styles.user_detail_container}>
        {/* profile pic */}
        <div className={styles.img_container}>
          <img
            src={`/avatars/${selectedFriend?.username}.jpeg`}
            alt='avatar'
            className={styles.avatar}
          />
        </div>
        {/* selected friend full name */}
        <div className={styles.username}>{fullName}</div>
      </div>

      {/* show detail btn */}
      <div onClick={handleClick}>
        <HiOutlineDotsHorizontal size='30px' />
      </div>
    </div>
  )
}

export default ChatHeader
