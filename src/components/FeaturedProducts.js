import React, { useEffect } from "react";
import { useProductsContext } from "../context/products_context";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
    products,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <section className="menu-section">
      <div className="work-info">
        <h3 className="title">menu</h3>
        <h2 className="main-text">Explore our best menu</h2>
        <p className="paragraph-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quo
          suscipit illum odio. Ullam earum impedit tempore dicta quis optio?
        </p>
      </div>
      <div className="menu-items">
        {featured.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
      <Link to="/products" className="btn">
        all products
      </Link>
    </section>
  );
};

export default FeaturedProducts;
