import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(): React.FC {
  return (
    <header className="header">
      <Link to="/" className="logo">QPICK</Link>
      <div className="icons">
        <Link to="/cart" className="icon cart">Корзина</Link>
      </div>
    </header>
  );
}

export default Header;

