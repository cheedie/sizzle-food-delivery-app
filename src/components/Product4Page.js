import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../utilis/helpers";
// import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";

const Product4Page = ({ image, name, price, id, description }) => {
  return (
    <Wrapper>
      <article>
        <div className="">
          <Link to={`/products/${id}`}>
            <img src={image} className="img" alt={name} />

            <div>
              <h5 className="name">{name}</h5>
              <p className="price">{formatPrice(price)}</p>
            </div>
            <div className="product-info">
              <p className="desc">{description}</p>
            </div>
          </Link>

          {/* <div className="product-icon">
            <div className="review-star">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
          </div> */}
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  a {
    color: black;
  }
  .name {
    font-size: 2rem;
    font-weight: 700;

    padding-top: 0.85rem;
  }
  .price {
    color: var(--grey-2);
    font-size: 1.3rem;
  }
  .desc {
    color: var(--grey-1);
    font-size: 1.2rem;
  }
`;

export default Product4Page;
