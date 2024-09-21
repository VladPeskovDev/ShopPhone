import React from 'react';
import ProductCard from './ProductCard';
import './ProductCatalog.css'; 
import { products } from './Product'; 



export default function ProductCatalog(): JSX.Element {
  return (
    <div className="product-catalog">
      {products.map(product => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};
