import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from './Logo';

const Navigation = () => {
  return (
    <header className="header">
      <Logo />
      <nav>
        <ul className="navigation">
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/a-propos"
            className={(nav) => (nav.isActive ? 'nav-active' : '')}
          >
            <li>À Propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
