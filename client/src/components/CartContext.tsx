import React, { createContext, useContext, useState } from 'react';
import type { Product } from './Product';

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeItem: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export default function CartProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product): void => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };


  const removeItem = (id: number): void => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  
  const increaseQuantity = (id: number): void => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  
  const decreaseQuantity = (id: number): void => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        cartItems,
        addToCart,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
