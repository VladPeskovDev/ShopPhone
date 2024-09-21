import React from 'react';
import './ProductCard.css';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
};

const ProductCard: React.FC<Product> = ({ id, name, price, image, rating }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <div className="product-info">
        <h3>{name}</h3>
        <p>{price} Р</p>
        <span className="rating">⭐ {rating}</span>
        <button className="buy-button">Купить</button>
      </div>
    </div>
  );
};

export default ProductCard;


