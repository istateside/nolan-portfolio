import React from 'react'
import { Link } from 'react-router'

export class Title extends React.Component {
  render() {
    return (
      <Link id="logo" to="/" className="title-logo">
        <h1 className="title-logo--name title-logo--name__top">
          <span className="title-logo--first-name title-logo--first-name__top">Aubrey</span> <span className="title-logo--last-name title-logo--last-name__top">Nolan</span>    
        </h1>
        <h1 className="title-logo--name title-logo--name__back">
          <span className="title-logo--first-name title-logo--first-name__back">Aubrey</span> <span className="title-logo--last-name title-logo--last-name__back">Nolan</span>
        </h1>
      </Link>
    )
  }
}