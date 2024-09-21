// src/pages/CartPage.tsx
import React from 'react';
import Header from '../Header';


function CartPage(): JSX.Element {
  return (
    <div>
      <Header />
      <div className="cart-content">
        {/* Здесь будет отображаться содержимое корзины */}
        <h2>Корзина</h2>
        {/* Добавим корзину товаров */}
      </div>
     
    </div>
  );
}

export default CartPage;
