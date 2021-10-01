import React from 'react'
import SearchBox from '../SearchBox'
import FriendsList from '../FriendsList'
import styles from './LeftScreen.module.css'
import Settings from '../Settings'

const LeftScreen = () => {
  return (
    <div className={styles.container}>
      <SearchBox />
      <FriendsList />
      <Settings />
    </div>
  )
}

export default LeftScreen
