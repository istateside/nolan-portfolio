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
      <div className="nav-wrapper">
        <button className="hamburger js-nav-toggle mobile-only" ref='nav-toggle' onClick={this.toggleNav.bind(this)}>
          <div className="hamburger__inner"></div>
        </button>
        <nav className='mainNav' ref='nav'>
          <ul className="horizontal-list">
            {this.props.links.map((link, idx) => {
              return <NavItem key={`link-${idx}`} href={link.href} label={link.label} />
            })}
          </ul>
        </nav>
      </div>
    );
  }
  
  toggleNav() {
    this.refs.nav.classList.toggle('-is-visible');
  }
}