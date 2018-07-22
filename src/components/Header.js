import React from 'react';
import SocialLinks from './Social-Links';
import logo from '../img/logo.jpg'
// import Link from 'gatsby-link'

const Header = () => (
  <header className="site-header">
    <a href="/" className="logo">
      <img src={logo} alt="" />
    </a>
    <h1 className="site-title">
      Kimberley Green
    </h1>
    <nav role="navigation" className="nav">
      <ul className="nav-menu">
        <li className="nav-menu-item">
          <a href="#aboutme">About Me</a>
        </li>
        <li className="nav-menu-item">
          <a href="#consultingservices">Consulting Services</a>
        </li>
        <li className="nav-menu-item">
          <a href="#contactme">Contact</a>
        </li>
      </ul>
    </nav>
    
  </header>
)

export default Header;
