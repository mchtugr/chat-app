import React, { useContext } from 'react'
import styles from './Settings.module.css'
import { FiMoon, FiSun, FiLogOut } from 'react-icons/fi'
import UserContext from '../../context/userContext'

const Settings = () => {
  const { logout } = useContext(UserContext)
  return (
    <div className={styles.container}>
      <div className={styles.icon_container}>
        <FiMoon />
      </div>
      <div className={styles.icon_container} onClick={() => logout()}>
        <FiLogOut />
      </div>
    </div>
  )
}

export default Settings
