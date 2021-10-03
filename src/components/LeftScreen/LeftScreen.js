import React, { useContext } from 'react'
import SearchBox from '../SearchBox'
import FriendsList from '../FriendsList'
import styles from './LeftScreen.module.css'
import Settings from '../Settings'
import ThemeContext from '../../context/themeContext'

const LeftScreen = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div
      className={`${styles.container} ${
        theme === 'dark' && styles.container_dark
      }`}
    >
      <SearchBox />
      <FriendsList />
      <Settings />
    </div>
  )
}

export default LeftScreen
