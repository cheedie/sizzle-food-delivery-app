import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utilis/constant";
import { formatPrice } from "../utilis/helpers";
import { Link } from "react-router-dom";
import { Loading, Error, AddToCart, Stars, PageHero } from "../components";

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
        // eslint-disable-next-line
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    image,
  } = product;

  return (
    <section>
      <PageHero title={name} product />
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
      </div>
      <div className="products-center">
        <section className="content">
          <img src={image} alt={name} />
          <h2>{name}</h2>
          <Stars stars={stars} reviews={reviews} />
          <h5 className="price">{formatPrice(price)}</h5>
          <p className="desc">{description}</p>
          <p className="info">
            <span>Availabe : </span>
            {stock > 0 ? "In stock" : "out of stock"}
          </p>
          <p className="info">
            <span>SKU : </span>
            {sku}
          </p>
          <hr />
          {stock > 0 && <AddToCart product={product} />}
        </section>
      </div>
    </section>
  );
};

export default SingleProductPage;
