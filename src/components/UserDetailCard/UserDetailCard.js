import React, { useContext } from 'react'
import ThemeContext from '../../context/themeContext'
import styles from './UserDetailCard.module.css'

const UserDetailCard = (props) => {
  const { children, contactMethod } = props
  const { theme } = useContext(ThemeContext)
  return (
    <div
      className={`${styles.container} ${
        theme === 'dark' && styles.container_dark
      }`}
    >
      <span>{children}</span>
      <span>{contactMethod}</span>
    </div>
  )
}

export default UserDetailCard
