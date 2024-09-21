import React from 'react';
import ProductCard from './ProductCard';
import './ProductCatalog.css'; 


const products = [
  { id: 1, name: 'Apple BYZ S852I', price: 2927, image: 'https://phonatik.by/upload/iblock/a8c/2o3gtiuk73o8rg5y956u4udnbh6tc8jm.png', rating: 4.7 },
  {
    id: 2,
    name: "Apple EarPods",
    price: 2327,
    image: "https://avatars.mds.yandex.net/i?id=e49f4ef416a287c319fac6fc88ecb17f4f8a8d7d-9128286-images-thumbs&n=13",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Apple EarPods",
    price: 2327,
    image: "https://avatars.mds.yandex.net/i?id=ad746a83e6f11dd995973f7ee8a8ac888de60ac8-9232692-images-thumbs&n=13",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Apple BYZ S852I",
    price: 2927,
    image: "https://avatars.mds.yandex.net/i?id=410ab93a4ab1dcc3f2ebf1e1c76697de48dae022-10637828-images-thumbs&n=13",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Apple EarPods",
    price: 2327,
    image: "https://avatars.mds.yandex.net/i?id=ccb74d1757abbd294b7fc3a4aa8cbc959a5fe15729c637b1-12753060-images-thumbs&n=13",
    rating: 4.5,
  },
  {
    id: 6,
    name: "Apple EarPods",
    price: 2327,
    image: "https://avatars.mds.yandex.net/i?id=69bfa11e3ed8bbdcde39cfd10dfe6a1331a4b5b4-10547508-images-thumbs&n=13",
    rating: 4.5,
  },
  {
    id: 7,
    name: "Apple AirPods",
    price: 9527,
    image: "https://avatars.mds.yandex.net/i?id=961f05debb8fff225d44510b325304a5d19c7780-4844054-images-thumbs&n=13",
    rating: 4.7,
  },
  {
    id: 8,
    name: "GERLAX GH-04",
    price: 6527,
    image: "https://avatars.mds.yandex.net/i?id=afc104bcb58bbeaaa31bd5b89f7ccf814b84946f24875062-5869570-images-thumbs&n=13",
    rating: 4.7,
  },
  {
    id: 9,
    name: "BOROFONE BO4",
    price: 7527,
    image: "https://avatars.mds.yandex.net/i?id=185fac62996fed5668e85bf06dd6197981e9e1a686d3909b-11740199-images-thumbs&n=13",
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
