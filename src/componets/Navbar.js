import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/', text: 'Home', exact: true },
  { path: '/about', text: 'About us' },
  { path: '/skills', text: 'Skills' },
  { path: '/services', text: 'Services' },
  { path: '/protfolio', text: 'Portfolio' },
  { path: '/contact', text: 'Contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand logo" href="#">Robin Singh</a>
      <button onClick={toggleMenu} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={isOpen} aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
        <ul className="navbar-nav ms-auto justify-content-center align-items-center">
          {navItems.map(({ path, text, exact = false }, index) => (
            <li key={index} className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to={path} exact={exact} onClick={toggleMenu}>{text}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
