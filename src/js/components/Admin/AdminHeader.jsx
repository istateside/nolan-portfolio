import React from 'react'
import { Link } from 'react-router';

export class AdminHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let loginStateButton;
    if (this.props.loggedIn) {
      loginStateButton = <Link to='/admin/logout'>LOGOUT?</Link>;
    } else {
      loginStateButton = <Link to='/admin/login'>LOGIN?</Link>;
    }
    
    return (
      <header className="admin-page">
        <ul>
          <li><Link to=''>Homepage</Link></li>
          {loginStateButton}
        </ul>
        
        {this.props.children}
      </header>
    )
  }
}