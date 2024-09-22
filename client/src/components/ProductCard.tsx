import React, { useState } from 'react';
import './ProductCard.css';
// eslint-disable-next-line import/no-cycle
import { useCart } from './CartContext';
import ProductDetailsModal from './ui/ProductDetailsModal';

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
};

export default function ProductCard({ id, name, price, image, rating }: Product): JSX.Element {
  const { addToCart } = useCart(); 
  const [open, setOpen] = useState(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleAddToCart = (): void => {
    addToCart({ id, name, price, image, rating });
  };

  return (
    <>
    <div className="product-card">
      <img src={image} alt={name} onClick={handleOpen}/>
      <div className="product-info">
        <h3>{name}</h3>
        <span className="rating">⭐ {rating}</span>
        <span className="price">{price} Р</span>
        <button className="buy-button" onClick={handleAddToCart}>
          Купить
        </button>
      </div>
    </div>
    <ProductDetailsModal
        product={{ id, name, price, image, rating }}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
}

