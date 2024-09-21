// src/components/CartItemCard.tsx
import React from 'react';
import './CartItemCard.css';
import type { Product } from './Product';
import { FaTrashAlt } from 'react-icons/fa';

interface CartItemProps extends Product {
  quantity: number;
  onRemove: () => void;
  onIncrease: () => void;
  onDecrease: () => void;
}

const CartItemCard: React.FC<CartItemProps> = ({
  id,
  name,
  price,
  image,
  rating,
  quantity,
  onRemove,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div className="cart-item-card">
      <img src={image} alt={name} className="cart-item-image" />
      <div className="cart-item-info">
        <p className="item-name">{name}</p>
        <p className="item-price">{price * quantity} Р</p> {/* Цена умножена на количество */}
        <div className="cart-item-controls">
          <button onClick={onDecrease}>-</button>
          <span>{quantity}</span>
          <button onClick={onIncrease}>+</button>
        </div>
      </div>
      <div className="cart-item-actions">
        <button onClick={onRemove} className="remove-button"> <FaTrashAlt /> </button>
      </div>
    </div>
  );
};

export default CartItemCard;
