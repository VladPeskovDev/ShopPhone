import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CatalogPage from './components/pages/CatalogPage';
import CartPage from './components/pages/CartPage';
import './App.css';

function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CatalogPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
