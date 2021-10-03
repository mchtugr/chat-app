import React, { useContext } from 'react'
import styles from './Settings.module.css'
import { FiMoon, FiSun, FiLogOut } from 'react-icons/fi'
import UserContext from '../../context/userContext'
import ThemeContext from '../../context/themeContext'

const Settings = () => {
  const { logout } = useContext(UserContext)
  const { theme, switchTheme } = useContext(ThemeContext)
  return (
    <div
      className={`${styles.container} ${
        theme === 'dark' && styles.container_dark
      }`}
    >
      <div
        className={`${styles.icon_container} ${
          theme === 'dark' && styles.icon_container_dark
        }`}
        onClick={switchTheme}
      >
        {theme === 'light' ? <FiMoon /> : <FiSun />}
      </div>
      <div
        className={`${styles.icon_container} ${
          theme === 'dark' && styles.icon_container_dark
        }`}
        onClick={() => logout()}
      >
        <FiLogOut />
      </div>
    </div>
  )
}

export default Settings
