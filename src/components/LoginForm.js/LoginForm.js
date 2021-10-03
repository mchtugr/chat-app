import React, { useRef, useContext } from 'react'
import ThemeContext from '../../context/themeContext'
import useLogin from '../../hooks/useLogin'
import styles from './LoginForm.module.css'

const LoginForm = () => {
  const { theme } = useContext(ThemeContext)
  const usernameRef = useRef()
  const firstNameRef = useRef()
  const lastNameRef = useRef()

  const { login } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()
    const username = usernameRef.current.value
    const firstName = firstNameRef.current.value
    const lastName = lastNameRef.current.value
    login({ username, firstName, lastName })
  }

  return (
    <div
      className={`${styles.container} ${
        theme === 'dark' && styles.container_dark
      }`}
    >
      <form onSubmit={handleSubmit} className={styles.form}>
        <h3 className={styles.header}>Login to your account</h3>
        <input
          type='text'
          placeholder='Username'
          ref={usernameRef}
          className={`${styles.input} ${theme === 'dark' && styles.input_dark}`}
          required
        />
        <input
          type='text'
          placeholder='First Name'
          ref={firstNameRef}
          className={`${styles.input} ${theme === 'dark' && styles.input_dark}`}
          required
        />
        <input
          type='text'
          placeholder='Last Name'
          ref={lastNameRef}
          className={`${styles.input} ${theme === 'dark' && styles.input_dark}`}
          required
        />
        <button
          type='submit'
          className={`${styles.btn} ${theme === 'dark' && styles.btn_dark}`}
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
