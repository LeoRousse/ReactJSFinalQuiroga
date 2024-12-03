// components/NavBar.jsx
import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar is-light">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          Quiroga's Store
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;