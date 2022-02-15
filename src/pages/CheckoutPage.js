import React, { useEffect } from "react";
import styled from "styled-components";
import { PageHero, PayStackCheckout } from "../components";
import { useUserContext } from "../context/user_context";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../context/cart_context";

const CheckoutPage = () => {
  const { cart } = useCartContext();
  const navigate = useNavigate();
  const { myUser, loginWithRedirect } = useUserContext();

  // useEffect(() => {
  //   if (!myUser) {
  //     navigate("/");
  //   }
  // });

  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        {cart.length < 1 ? (
          <div className="empty">
            <h2>your cart is empty</h2>
            <Link to="/products" className="btn">
              shop
            </Link>
          </div>
        ) : (
          <PayStackCheckout />
        )}
      </Wrapper>

      <section className="page section-center section"></section>
    </main>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }
`;

export default CheckoutPage;
