import React from 'react';
import ProductCatalog from '../ProductCatalog';
import ProductCatalog2 from '../ProductCatalog2';
import Footer from '../Footer';



function CatalogPage(): JSX.Element {
  return (
    <div>
    <div>
      <ProductCatalog />
      <ProductCatalog2 />
      </div>
      <Footer/>
      </div>
  );
}

export default CatalogPage;
