import React from 'react';
// import PropTypes from 'prop-types';
// import Link from 'gatsby-link';

const SocialLinks = (props) => (
  <div className="social-links">
    <ul className="social-icons">
        <li className="social-icons--item">
          <a href="mailto:consultingupside@gmail.com" aria-label="Email us at consultingupside@gmail.com">
          <i className="icon-email icon-link"></i>
          <span className="visibility-hidden">Email us at consultingupside@gmail.com</span>
          </a>
        </li>
      <li className="social-icons--item">
        <a href="https://www.linkedin.com/in/kimberleygreen1/" aria-label="Cnnect with me on linkedin">
        <i className="icon-linkedin icon-link"></i>
        <span className="visibility-hidden">Connect with me on linkedin</span>
        </a>
      </li>
      <li className="social-icons--item">
        <a href="https://www.twitter.com/upside_social" aria-label="follow us on twitter">
          <i className="icon-twitter icon-link"></i>
          <span className="visibility-hidden">follow us on twitter</span>
        </a>
      </li>
      <li className="social-icons--item">
        <a href="https://www.instagram.com/upside.social" aria-label="follow us on instgram">
          <i className="icon-instagram icon-link"></i>
          <span className="visibility-hidden">follow us on instgram</span>
        </a>
      </li>
    </ul>
  </div>
)

export default SocialLinks;