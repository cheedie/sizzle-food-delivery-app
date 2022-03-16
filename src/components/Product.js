import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../utilis/helpers";
import { BsPlusLg } from "react-icons/bs";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";
const Product = ({ image, name, price, id, description }) => {
  return (
    <Wrapper>
      <article className="product">
        <div className="product-container info-contents">
          <Link to={`/products/${id}`}>
            <img src={image} className="img product-img" alt={name} />

            <div className="product-details">
              <h5>{name}</h5>
              <p>{formatPrice(price)}</p>
            </div>
            <div className="product-info">
              <p>{description}</p>
            </div>
          </Link>

          <div className="product-icon">
            <div className="review-star">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <Link to="/cart" className="product-cart-btn">
              <BsPlusLg />
            </Link>
          </div>
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Product;
