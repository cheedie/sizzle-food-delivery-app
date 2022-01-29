import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartButtons = () => {
  return (
    <section className="toggle-container">
      <div className="button-container">
        <Link to="/cart" className="cart-btn">
          Cart
          <span className="cart-container">
            <FaShoppingCart />
            <span className="cart-value">1</span>
          </span>
        </Link>
        <button type="button" className="auth-btn">
          Login <FaUserPlus />
        </button>
      </div>
    </section>
  );
};

export default CartButtons;
