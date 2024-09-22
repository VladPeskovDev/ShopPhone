/* eslint-disable react/button-has-type */
import React from 'react';
import { useCart } from '../CartContext';
import CartItemCard from '../CartItemCard';
import './CartPage.css'; 
import Footer from '../Footer';

export default function CartPage(): JSX.Element {
  const { cartItems, removeItem, increaseQuantity, decreaseQuantity } = useCart(); 

  return (
    <div className="cart-page-container">
      <div className="cart-page">
        {/* Левый контейнер с карточками товаров */}
        <div className="cart-items-container">
          {cartItems.length === 0 ? (
            <p>Корзина пуста</p>
          ) : (
            cartItems.map((item) => (
              <CartItemCard
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
                rating={item.rating}
                quantity={item.quantity}
                onRemove={() => removeItem(item.id)}
                onIncrease={() => increaseQuantity(item.id)}
                onDecrease={() => decreaseQuantity(item.id)}
              />
            ))
          )}
        </div>

        {/* Правый контейнер для оплаты */}
        <div className="cart-summary-container">
  <div className="cart-summary-box">
    <div className="total-row">
      <h2>ИТОГО</h2>
      <p>{cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)} Р</p>
    </div>
    <button className="checkout-button">Перейти к оформлению</button>
  </div>
</div>

      </div>
      <Footer />
    </div>
  );
}
