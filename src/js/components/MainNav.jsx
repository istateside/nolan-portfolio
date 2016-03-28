import React from 'react';
import { Link } from 'react-router';

export class NavItem extends React.Component {
  render() {
    return (
      <li><Link to={this.props.href}>{this.props.label}</Link></li>
    )
  }
}

export class MainNav extends React.Component {
  render() {
    return (
      <nav className='mainNav'>
        <ul className="horizontal-list">
          {this.props.links.map((link, idx) => {
            return <NavItem key={`link-${idx}`} href={link.href} label={link.label} />
          })}
        </ul>
      </nav>
    );
  }
}