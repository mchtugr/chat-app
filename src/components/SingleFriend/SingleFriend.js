import React, { useContext } from 'react'
import styles from './SingleFriend.module.css'
import UserContext from '../../context/userContext'
import ThemeContext from '../../context/themeContext'
import { BsCheckAll } from 'react-icons/bs'

const SingleFriend = (props) => {
  const { friend } = props
  const { onSelectedFriend, selectedFriend } = useContext(UserContext)
  const { theme } = useContext(ThemeContext)
  const fullName = friend.first_name + ' ' + friend.last_name
  // even user sent new messages, shows the last one
  const lastMessage = friend.messages[friend.messages.length - 1]
  // select current friend
  const handleClick = (id) => {
    onSelectedFriend(id)
  }
  return (
    <div
      className={`${styles.container} ${
        selectedFriend?.id === friend.id && 'active'
      } ${theme === 'dark' && styles.container_dark} ${
        theme === 'dark' && selectedFriend?.id === friend.id && 'active_dark'
      }`}
      onClick={() => handleClick(friend.id)}
    >
      {/* profile pic */}
      <div className={styles.img_container}>
        <img
          src={`/avatars/${friend.username}.jpeg`}
          alt='avatar'
          className={styles.avatar}
        />
      </div>
      <div className={styles.text_container}>
        {/* full name */}
        <div className={styles.username}>{fullName}</div>
        {/* last message */}
        <div className={styles.last_message}>
          <span className='center'>
            {lastMessage.sender === 'current_user' && (
              <BsCheckAll size='16px' />
            )}
          </span>
          {lastMessage.text.length <= 27
            ? lastMessage.text
            : `${lastMessage.text.slice(0, 27)} ...`}
        </div>
      </div>
    </div>
  )
}

export default SingleFriend
