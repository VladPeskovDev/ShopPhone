import React from 'react';
import ProductCard from './ProductCard';
import './ProductCatalog.css'; 


const products = [
  { id: 1, name: 'Apple BYZ S852I', price: 2927, image: '/path-to-image', rating: 4.7 },
  {
    id: 2,
    name: "Apple EarPods",
    price: 2327,
    image: "/images/apple_earpods_1.png",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Apple EarPods",
    price: 2327,
    image: "/images/apple_earpods_2.png",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Apple BYZ S852I",
    price: 2927,
    image: "/images/apple_byz_s852i.png",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Apple EarPods",
    price: 2327,
    image: "/images/apple_earpods_3.png",
    rating: 4.5,
  },
  {
    id: 6,
    name: "Apple EarPods",
    price: 2327,
    image: "/images/apple_earpods_4.png",
    rating: 4.5,
  },
  {
    id: 7,
    name: "Apple AirPods",
    price: 9527,
    image: "/images/apple_airpods.png",
    rating: 4.7,
  },
  {
    id: 8,
    name: "GERLAX GH-04",
    price: 6527,
    image: "/images/gerlax_gh_04.png",
    rating: 4.7,
  },
  {
    id: 9,
    name: "BOROFONE BO4",
    price: 7527,
    image: "/images/borofone_bo4.png",
    rating: 4.7,
  },
];

const ProductCatalog: React.FC = () => {
  return (
    <div className="product-catalog">
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductCatalog;
