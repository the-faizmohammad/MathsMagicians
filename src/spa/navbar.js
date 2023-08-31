import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => (
  <nav>
    <p className="header-title">Maths Magician</p>
    <ul className="menu-links">
      <li className="menu-link-item">
        <Link to="/">Home</Link>
      </li>
      <li className="menu-link-item">
        <Link to="/Calculator">Calculator</Link>
      </li>
      <li className="menu-link-item">
        <Link to="/Quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
