import React from 'react';

import './Navbar.css';

import logo from '../../Assets/logo.svg'

const Navbar = () => (
  <nav className="border-bottom border-white navbar sticky-top navbar-light bg-white ">
    
    <a className="navbar-brand ms-2 fs-3" href="#">
      <img src={logo} className="logo" />
      <strong>Bunt</strong><strong id="dash">_</strong>
    </a>
  </nav>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
