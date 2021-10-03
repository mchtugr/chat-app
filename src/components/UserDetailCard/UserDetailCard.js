import React from 'react'
import styles from './UserDetailCard.module.css'

const UserDetailCard = (props) => {
  const { children, contactMethod } = props
  return (
    <div className={styles.container}>
      <span>{children}</span>
      <span>{contactMethod}</span>
    </div>
  )
}

export default UserDetailCard
