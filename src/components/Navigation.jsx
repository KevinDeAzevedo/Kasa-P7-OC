import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../assets/kasa_logo.svg';

const Navigation = () => {
  return (
    <div className="navigation">
      <img src={logo} alt="Logo Kasa" />
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? 'nav-active' : '')}>
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/a-propos"
          className={(nav) => (nav.isActive ? 'nav-active' : '')}
        >
          <li>À propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
