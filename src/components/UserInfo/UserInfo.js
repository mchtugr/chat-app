import React, { useContext } from 'react'
import styles from './UserInfo.module.css'
import UserContext from '../../context/userContext'
import UserDetailCard from '../UserDetailCard/UserDetailCard'
import { BsCameraVideo, BsChat } from 'react-icons/bs'
import { FiPhone } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { useHistory } from 'react-router-dom'
import ThemeContext from '../../context/themeContext'

const UserInfo = () => {
  const { selectedFriend } = useContext(UserContext)
  const { theme } = useContext(ThemeContext)
  const fullName = selectedFriend.first_name + ' ' + selectedFriend.last_name
  const history = useHistory()
  const handleGoChatPage = () => {
    history.push('/chat')
  }
  return (
    <div
      className={`${styles.container} ${
        theme === 'dark' && styles.container_dark
      }`}
    >
      {/* go back to chat page */}
      <div className={styles.exit_btn} onClick={handleGoChatPage}>
        <AiOutlineClose size='30px' />
      </div>
      <div className={styles.detail_container}>
        <img
          src={`/avatars/${selectedFriend.username}.jpeg`}
          alt={selectedFriend.username}
          className={styles.img}
        />
        <div className={styles.username}>{fullName}</div>
        <div className={styles.last_seen}>
          {/* random last seen time */}
          last seen: {Math.floor(Math.random() * 59) + 1} min ago
        </div>
      </div>
      <div className={styles.contact_methods}>
        {/* Message Contact*/}
        <UserDetailCard contactMethod='Message'>
          <BsChat />
        </UserDetailCard>
        {/* Call Contact*/}
        <UserDetailCard contactMethod='Call'>
          <FiPhone />
        </UserDetailCard>
        {/* Video Chat Contact */}
        <UserDetailCard contactMethod='Video'>
          <BsCameraVideo />
        </UserDetailCard>
      </div>
    </div>
  )
}

export default UserInfo
