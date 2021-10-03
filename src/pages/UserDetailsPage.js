import React from 'react'
import HiddenFooter from '../components/HiddenFooter'
import LeftScreen from '../components/LeftScreen'
import RightScreen from '../components/RightScreen/RightScreen'
import UserInfo from '../components/UserInfo/UserInfo'
import useLogin from '../hooks/useLogin'
import { Redirect } from 'react-router-dom'

const UserDetailsPage = () => {
  const { user } = useLogin()

  if (!user) {
    return <Redirect to='/login' />
  }
  return (
    <div className='page_container'>
      <LeftScreen />
      <RightScreen>
        <UserInfo />
      </RightScreen>
      <HiddenFooter />
    </div>
  )
}

export default UserDetailsPage
