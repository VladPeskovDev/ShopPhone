import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext'; // Используем глобальный контекст корзины
import './Header.css';

export default function Header(): JSX.Element {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="header">
      <Link to="/" className="logo">
        QPICK
      </Link>
      <div className="icons">
        <FontAwesomeIcon icon={faHeart} className="icon heart" />
        <Link to="/cart" className="cart-icon-wrapper">
          <FontAwesomeIcon icon={faShoppingCart} className="icon cart" /> {/* Значок тележки */}
          {totalItems > 0 && <span className="cart-counter">{totalItems}</span>}{' '}
          {/* Счётчик корзины */}
        </Link>
      </div>
    </header>
  );
}
