import React from 'react'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router'
import { App } from './App.jsx'
import Home from './Home.jsx'
import About from './About.jsx'

export class AppRouter extends React.Component {
  render() {
    return (<Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/contact" component={About}/>
      </Route>
    </Router>)
  }
}