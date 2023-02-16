import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../assets/kasa_logo.svg';

const Navigation = () => {
  return (
    <div className="header">
      <img src={logo} className="logo" alt="Logo Kasa" />
      <ul className="navigation">
        <NavLink to="/" className={(nav) => (nav.isActive ? 'nav-active' : '')}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/a-propos"
          className={(nav) => (nav.isActive ? 'nav-active' : '')}
        >
          <li>À Propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
