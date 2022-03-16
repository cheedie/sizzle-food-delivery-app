import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import { formatPrice } from "../utilis/helpers";
import { Link } from "react-router-dom";
const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();

  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal : <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            shipping fee : <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            order total :{" "}
            <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        {myUser ? (
          <Link to="/checkout" className="btn">
            checkout
          </Link>
        ) : (
          <button className="btn" type="button" onClick={loginWithRedirect}>
            login
          </button>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;

  article {
    border: 1px solid grey;
    border-radius: 5px;
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
    font-size: 1.2rem;
    font-weight: 700;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
    padding: 0.75rem 0;
    font-size: 1.3rem;
  }
`;

export default CartTotals;
