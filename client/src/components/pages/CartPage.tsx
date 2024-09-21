/* eslint-disable react/button-has-type */
import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { useCart } from '../CartContext';
import CartItemCard from '../CartItemCard';
import './CartPage.css'; 

export default function CartPage(): JSX.Element {
  const { cartItems, removeItem, increaseQuantity, decreaseQuantity } = useCart(); 

  
  return (
    <div className="cart-page">
      <Header />
      <div className="cart-items">
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

      {/* Секция с итоговой суммой и кнопкой оформления */}
      <div className="cart-summary">
        <div className="cart-summary-box">
          <h2>ИТОГО</h2>
          <p>{cartItems.reduce(
          (acc, item) => acc + item.price * item.quantity,0)} </p> 
          <button className="checkout-button">Перейти к оформлению</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}



