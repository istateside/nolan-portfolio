import React from 'react';

export class NavItem extends React.Component {
  render() {
    return (
      <li><a href={this.props.href}>{this.props.label}</a></li>
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