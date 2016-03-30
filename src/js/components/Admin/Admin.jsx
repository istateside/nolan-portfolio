import React from 'react'
import AuthHandler from '../../authHandler.js'
const auth = new AuthHandler();

export class Admin extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="admin-page">
        Admin
        
        {this.props.children}
      </div>
    )
  }
}

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const token = auth.getToken();
    return (
      <div>
        <h1>Dashboard</h1>
        <p>You made it!</p>
        <p>{token}</p>
      </div>
    )
  }
}

export class Login extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {error: false};
  }
  contextTypes: {
    router: React.PropTypes.func.isRequired
  };
  
  handleSubmit(e) {
    e.preventDefault();
    
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    
    auth.login(username, password, (loggedIn) => {
      if (!loggedIn) {
        return this.setState({ error: true });
      }
      
      const location = this.props;
      
      if (location.state && location.state.nextPathname) {
        this.context.router.replace(location.state.nextPathname)
      } else {
        this.context.router.replace('/')
      }
    })
  }
  
  render() {
    return (
      <form className="login-form form form--login-form" onSubmit={this.handleSubmit.bind(this)}>
        <label className="form__label">
          <span className="form__label-text"></span>
          <input ref='username' type='text'/>
        </label>
        
        <label className="form__label">
          <span className="form__label-text"></span>
          <input ref='password' type='password'/>
        </label>
        
        <button type='submit'>Login</button>
        {this.state.error && (<p>Bad login.</p>)}
      </form>
    )
  }
}

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export class Logout extends React.Component {
  componentDidMount() {
    auth.logout();
  }
  
  render() {
    return (<p>You have logged out.</p>)
  }
}