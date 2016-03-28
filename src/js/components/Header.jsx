import React from 'react';
import ReactDOM from 'react-dom';

import { MainNav } from "./MainNav.jsx";
import { Title } from "./Title.jsx";

import 'css/header.css';

export class Header extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    const links = [
      { href: "/", label: "Home" },
      { href: "#", label: "Illustration" },
      { href: "#", label: "What Type of Girl?" },
      { href: "#", label: "Zine" },
      { href: "/contact", label: "About/Contact" },
    ];
    
    return (
      <header>
        <Title />
        <MainNav links={links} />
      </header>
    )
  }
}