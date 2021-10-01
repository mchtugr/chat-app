import React, { useRef, useContext } from 'react'
import useLogin from '../../hooks/useLogin'
import styles from './LoginForm.module.css'

const LoginForm = () => {
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
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h3 className={styles.header}>Login to your account</h3>
        <input
          type='text'
          placeholder='Username'
          ref={usernameRef}
          className={styles.input}
          required
        />
        <input
          type='text'
          placeholder='First Name'
          ref={firstNameRef}
          className={styles.input}
          required
        />
        <input
          type='text'
          placeholder='Last Name'
          ref={lastNameRef}
          className={styles.input}
          required
        />
        <button type='submit' className={styles.btn}>
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
