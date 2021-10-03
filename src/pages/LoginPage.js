import React from 'react'
import LoginForm from '../components/LoginForm.js/LoginForm'
import useLogin from '../hooks/useLogin'
import { Redirect, useLocation } from 'react-router-dom'
import HiddenFooter from '../components/HiddenFooter'

const LoginPage = () => {
  const { user } = useLogin()

  const { pathname } = useLocation()

  if (user && pathname === '/login') {
    return <Redirect to='/chat' />
  }

  return (
    <div className='page_container'>
      <LoginForm />
      <HiddenFooter />
    </div>
  )
}

export default LoginPage
