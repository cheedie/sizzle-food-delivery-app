import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utilis/constant";
import { formatPrice } from "../utilis/helpers";
import { Link } from "react-router-dom";

import styled from "styled-components";
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
    <Wrapper>
      <PageHero title={name} product />
      <div className="section section-center">
        <Link to="/products" className="btn">
          back to products
        </Link>
      </div>
      <section className="single-product-content">
        <img src={image} alt={name} />
        <div>
          <h2 className="name">{name}</h2>
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
          {stock > 0 && <AddToCart product={product} />}
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .single-product-content {
    display: grid;
    align-items: center;
    gap: 1.2rem;
    margin: 0 auto 1rem auto;
    width: 80vw;
  }
  .single-product-content img {
    height: 25rem;
    width: 30rem;
    object-fit: cover;
    border-radius: 5px;
  }
  .name {
    font-weight: 800;
    color: var(--primary-600);
    font-size: 3rem;
  }
  .price {
    font-style: italic;
    font-size: 2rem;
  }
  .desc {
    font-size: 2rem;
  }
  .info {
    font-size: 1.5rem;
  }
  @media (min-width: 800px) {
    .single-product-content {
      grid-template-columns: repeat(2, 1fr);
    }
    .single-product-content img {
      height: 30rem;
      width: 38rem;
      object-fit: cover;
      border-radius: 5px;
    }
  }
`;
export default SingleProductPage;
