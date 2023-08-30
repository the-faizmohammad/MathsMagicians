import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <p className="header-title">Math's Magician</p>
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
