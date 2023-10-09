import React, { useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faFacebook,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

function Header() {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <header className="header">
      <div className="logo">
      
        <span>Clarence</span>
      </div>
      <nav className="nav-links">
        <ul>
          <li className={activeLink === 0 ? 'active' : ''}>
            <a href="#" onClick={() => handleLinkClick(0)}>About Me</a>
          </li>
          <li className={activeLink === 1 ? 'active' : ''}>
            <a href="#" onClick={() => handleLinkClick(1)}>My Blog</a>
          </li>
          <li className={activeLink === 2 ? 'active' : ''}>
            <a href="#" onClick={() => handleLinkClick(2)}>Review</a>
          </li>
          <li className={activeLink === 3 ? 'active' : ''}>
            <a href="#" onClick={() => handleLinkClick(3)}>Contact Me</a>
          </li>
        </ul>
      </nav>
      <div className="social-icons">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
      </div>
    </header>
  );
}

export default Header;
