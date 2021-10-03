import React from 'react'
import LeftScreen from '../components/LeftScreen'
import RightScreen from '../components/RightScreen/RightScreen'
import UserInfo from '../components/UserInfo/UserInfo'

const UserDetailsPage = () => {
  return (
    <div className='page_container'>
      <LeftScreen />
      <RightScreen>
        <UserInfo />
      </RightScreen>
    </div>
  )
}

export default UserDetailsPage
