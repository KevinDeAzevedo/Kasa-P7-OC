import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Navigation />
      <div className="error">
        <h1>
          <span className="error-code">404</span> Oups! La page que vous
          demandez n'existe pas.
        </h1>
        <NavLink to="/" className="error-link">
          Retourner sur la page d’accueil
        </NavLink>
      </div>
      <Footer />
    </>
  );
}
