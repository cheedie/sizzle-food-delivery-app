import React from "react";
import { ProductList, PageHero } from "../components";

const ProductsPage = () => {
  return (
    <main>
      <PageHero title="products" />
      <div className="page">
        <div className="section-center products-container">
          <div>
            <ProductList />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
