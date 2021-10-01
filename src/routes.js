import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Link,
  Switch,
  Route,
  useLocation,
} from 'react-router-dom'

import ChatPage from './pages/ChatPage'
import LoginPage from './pages/LoginPage'
import StartPage from './pages/StartPage'
import UserDetailsPage from './pages/UserDetailsPage'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={StartPage} />
        <Route path='/login' component={LoginPage} />
        <Route path='/chat' component={ChatPage} />
        <Route path='/chat/:userId' component={UserDetailsPage} />
      </Switch>
    </Router>
  )
}

export default Routes
