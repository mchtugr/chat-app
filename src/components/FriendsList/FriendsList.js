import React, { useContext, Fragment } from 'react'
import UserContext from '../../context/userContext'
import SingleFriend from '../SingleFriend/SingleFriend'
import styles from './FriendsList.module.css'

const FriendsList = () => {
  const { friendList } = useContext(UserContext)
  return (
    <div className={styles.container}>
      {/* if no match, render error! */}
      {friendList.length === 0 && (
        <div className={styles.no_match}>No friends found!</div>
      )}
      {friendList.map((friend) => (
        <Fragment key={friend.id}>
          <SingleFriend friend={friend} />
        </Fragment>
      ))}
    </div>
  )
}

export default FriendsList
