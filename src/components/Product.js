import React from "react";
import { Link } from "react-router-dom";
import { formatPrice } from "../utilis/helpers";
import { BsPlusLg } from "react-icons/bs";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import productImg from "../assets/product-img1.jpeg";

const Product = ({ image, name, price, id, description }) => {
  return (
    <section>
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
            <button className="product-cart-btn">
              <BsPlusLg />
            </button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Product;
