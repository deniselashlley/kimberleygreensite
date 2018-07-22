import React from 'react';
import instagram from '../img/instagram.svg';
import mail from '../img/mail.svg';
import twitter from '../img/twitter.svg';
import linkedin from '../img/linkedin.svg';
// import PropTypes from 'prop-types';
// import Link from 'gatsby-link';

const SocialLinks = (props) => (
  <div className="social-links">
    <ul className="social-icons">
        { /*<li className="social-icons--item">
          <a href="mailto:consultingupside@gmail.com" aria-label="Email us at consultingupside@gmail.com" className="icon-link">
            <img src={mail} alt="email me"  />
          </a>
        </li>
        */ }
      <li className="social-icons--item">
        <a href="https://www.linkedin.com/in/kimberleygreen1/" aria-label="Connect with me on linkedin" className="icon-link">
          <img src={linkedin}  alt="Connect with me on linkedin" />
        </a>
      </li>
      <li className="social-icons--item">
        <a href="https://www.twitter.com/upside_social" aria-label="follow me on twitter" className="icon-link">
          <img src={twitter} alt="follow me on twitter" />
        </a>
      </li>
      <li className="social-icons--item">
        <a href="https://www.instagram.com/upside.social" aria-label="follow me on instgram" className="icon-link">
          <img src={instagram}  alt="follow me on instgram"/>
        </a>
      </li>
    </ul>
  </div>
)

export default SocialLinks;