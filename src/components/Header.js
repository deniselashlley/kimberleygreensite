import React from 'react';
import SocialLinks from './Social-Links';
// import Link from 'gatsby-link'

const Header = () => (
  <header className="site-header">
    <a href="/" className="logo">Logo</a>
    <h1 className="site-title">
      Kimberley Green
      <span className="byline">BA. MSc - Social Impact Consultant</span>
    </h1>
    <nav role="navigation">
      <ul className="nav-menu">
        <li className="nav-menu-item">
          <a href="#aboutme">About Me</a>
        </li>
        <li className="nav-menu-item">
          <a href="#consultancyservices">Consultancty Services</a>
        </li>
        <li className="nav-menu-item">
          <a href="#contactme">Contact</a>
        </li>
      </ul>
    </nav>
    <SocialLinks showEmailAddress />
  </header>
)

export default Header;
