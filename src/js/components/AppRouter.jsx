import React from 'react'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import { App } from './App.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import { Login, Logout, Dashboard, Admin } from './Admin/Admin.jsx'
import AuthHandler from '../authHandler.js'

const auth = new AuthHandler();

export class AppRouter extends React.Component {
  
  render() {
    return (<Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path="contact" component={About}/>
        
        <Route path="/admin" component={Admin}>
          <Route path="login" component={Login} />
          <Route path="logout" component={Logout} />
          <Route path="dashboard" onEnter={this.requireAuth} component={Dashboard}/>
        </Route>
      </Route>
    </Router>)
  }
  
  requireAuth(nextState, replace) {
    if (!auth.loggedIn()) {
      replace({
        pathname: '/admin/login',
        state: { nextPathname: nextState.location.pathname }
      })
    }
  }
}

class AuthRoute extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (<Route onEnter={this.requireAuth} {...this.props} />)
  }
  
}