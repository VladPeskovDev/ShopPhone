import React from 'react';
import Header from '../Header';
import ProductCatalog from '../ProductCatalog';
import ProductCatalog2 from '../ProductCatalog2';
import Footer from '../Footer';


function CatalogPage(): JSX.Element {
  return (
    <div>
      <Header />
      <ProductCatalog />
      <ProductCatalog2 />
      <Footer />
      
    </div>
  );
}

export default CatalogPage;
