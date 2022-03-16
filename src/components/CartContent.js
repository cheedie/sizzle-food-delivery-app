import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import CartColums from "./CartColums";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  return (
    <Wrapper className="section section-center">
      <CartColums />
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}

      <hr />
      <div className="link-container">
        <Link to="/products" className="btn">
          continue shopping
        </Link>
        <button type="button" className="btn clear-btn" onClick={clearCart}>
          clear cart
        </button>
      </div>
      <CartTotals />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }

  .clear-btn {
    background: black;
    color: #ffff;
    font-weight: 400;
    font-size: 1.2rem;
    padding: 0.25rem 0.5rem;
    letter-spacing: 1px;
  }
`;
export default CartContent;
