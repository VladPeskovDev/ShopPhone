import React from 'react';
import ProductCatalog from '../ui/ProductCatalog';
import ProductCatalog2 from '../ui/ProductCatalog2';

function CatalogPage(): JSX.Element {
  return (
    <div>
      <div>
        <ProductCatalog />
        <ProductCatalog2 />
      </div>
    </div>
  );
}

export default CatalogPage;
