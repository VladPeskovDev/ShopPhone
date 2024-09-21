import React from 'react';
import Header from '../Header';
import ProductCatalog from '../ProductCatalog';
import Footer from '../Footer';


function CatalogPage(): JSX.Element {
  return (
    <div>
      <Header />
      <ProductCatalog />
      <Footer />
      
    </div>
  );
}

export default CatalogPage;
