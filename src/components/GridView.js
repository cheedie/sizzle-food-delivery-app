import React from "react";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <section>
      <div className="grid-products-container">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
};

export default GridView;
