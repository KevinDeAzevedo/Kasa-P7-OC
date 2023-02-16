import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Product from '../pages/Product';
import Error from '../pages/Error';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/logement/:id" element={<Product />} />
        {/* path * cible tous les endpoints inconnus et redirige sur la page 404 */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
