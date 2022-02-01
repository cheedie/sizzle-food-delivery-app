import React from "react";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import productImg from "../assets/product-img1.jpeg";

const FeaturedProducts = () => {
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
        <article className="product">
          <div className="product-container info-contents">
            <img src={productImg} className="img product-img" alt="" />
            <div className="product-details">
              <h5>Rose Muffen</h5>
              <p>N2000</p>
            </div>
            <div className="product-info">
              <p>served with french fries + drink</p>
              <p>
                choice of coke, fanta, sprite. Ugrade to large fries. Add
                whopper patty, Add tender crisp patty and more...
              </p>
            </div>
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
      </div>
      <Link to="/products" className="btn">
        view more
      </Link>
    </section>
  );
};

export default FeaturedProducts;
