import React from 'react'
import faker from 'faker'
import styles from './SingleFriend.module.css'

const SingleFriend = (props) => {
  const { friend } = props
  const imgUrl = faker.image.people()
  const lastMessage = friend.messages[friend.messages.length - 1].text
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <img src={imgUrl} alt='avatar' className={styles.avatar} />
      </div>
      <div className={styles.text_container}>
        <div className={styles.username}>{friend.first_name}</div>
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
