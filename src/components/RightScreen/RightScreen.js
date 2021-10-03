import React, { useContext } from 'react'
import ThemeContext from '../../context/themeContext'
import styles from './RightScreen.module.css'

const RightScreen = (props) => {
  const { children } = props
  const { theme } = useContext(ThemeContext)
  return (
    <div
      className={`${styles.container} ${
        theme === 'dark' && styles.container_dark
      }`}
    >
      {/* child components here */}
      {children}
    </div>
  )
}

export default RightScreen
