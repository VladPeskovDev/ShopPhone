import React from 'react';
import { products } from '../Product2';
import './ProductCatalog2.css';
import ProductCard from './ProductCard';

export default function ProductCatalog2(): JSX.Element {
  return (
    <div className="product-catalog">
      {products.map((product) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
