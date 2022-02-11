import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartButtons = () => {
  const { closeSidebar } = useProductsContext();
  const { total_items } = useCartContext();
  return (
    <Wrapper className="toggle-container">
      <div className="button-container">
        <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
          Cart
          <span className="cart-container">
            <FaShoppingCart />
            <span className="cart-value">{total_items}</span>
          </span>
        </Link>
        <button type="button" className="auth-btn">
          Login <FaUserPlus />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .button-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    width: 225px;
  }
  .cart-btn {
    color: var(--primary-900);
    font-size: 1.5rem;
    letter-spacing: var(--letterSpacing);
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
  }
  .cart-container svg {
    height: 1.6rem;
    margin-left: 5px;
  }

  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--primary-600);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--white);
    padding: 12px;
  }

  .auth-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.3rem;
    color: var(--primary-900);
    cursor: pointer;
  }
  .auth-btn svg {
    margin-left: 2px;
  }
`;

export default CartButtons;
