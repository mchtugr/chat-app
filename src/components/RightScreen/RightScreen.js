import React from 'react'
import styles from './RightScreen.module.css'

const RightScreen = (props) => {
  const { children } = props
  return <div className={styles.container}>{children}</div>
}

export default RightScreen
