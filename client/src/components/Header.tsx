// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <Link to="/" className="logo">QPICK</Link>
      <div className="icons">
        <FontAwesomeIcon icon={faHeart} className="icon heart" /> {/* Значок сердечка */}
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} className="icon cart" /> {/* Значок тележки */}
        </Link>
      </div>
    </header>
  );
}


