import React, { Component } from 'react';
import SocialLinks from './Social-Links';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuState: false
    }
  }

  handleShowMenu(event) {
    event.preventDefault();
    console.log('click');

    this.setState({
      menuState: this.state.menuState === false,
    });
  }

  render() {
    const menuClass = this.state.menuState ? 'open' : 'close';
    const activeState = menuClass === 'open' ? 'active' : 'inactive';

    return (
      <header className="site-header">
      <h1 className="site-title">
        Kimberley Green
      </h1>
      <nav role="navigation" className="nav">
        <a 
          href="#" 
          className={`menu-icon ${activeState} `}
          onClick={e => this.handleShowMenu(e)}
          >
          <span>Menu</span>
        </a>
        <ul className={`nav-menu ${menuClass}`}>
          <li className="nav-menu-item">
            <a href="#aboutme">About Me</a>
          </li>
          <li className="nav-menu-item">
            <a href="#consultingservices">Consulting Services</a>
          </li>
          <li className="nav-menu-item">
            <a href="#news">Feature Article</a>
          </li>
          <li className="nav-menu-item">
            <a href="#contactme">Contact</a>
          </li>
        </ul>
      </nav>
      
    </header>
    )
  }
}

export default Header;
