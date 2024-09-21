import React from 'react';
import ProductCard from './ProductCard';
import './ProductCatalog2.css'; 
import { products } from './Product2'; 




export default function ProductCatalog2(): JSX.Element {
  return (
    <div className="product-catalog">
      {products.map(product => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};


