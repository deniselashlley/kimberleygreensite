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
      <span className="byline">BA. MSc - Social Impact Consultant</span>
    </h1>
    <nav role="navigation" className="nav-menu">
      <ul>
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
      <SocialLinks showEmailAddress />
    </nav>
    
  </header>
)

export default Header;
