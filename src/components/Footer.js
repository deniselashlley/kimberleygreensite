import React from 'react';
import SocialLinks from './Social-Links';

let noEmail = false;

const Footer = () => (
  <footer role="footer" className="footer">
    <div className="container">
      <SocialLinks showEmailAddress={noEmail} />
      <p className="copy-text">Copyright &copy; <span>2018</span> Kimberley Green.</p>	
    </div>
  </footer>
)

export default Footer;
