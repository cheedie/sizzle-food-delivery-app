import React from "react";
import { PageHero, StripeCheckout } from "../components";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title="checkout" />
      <section className="page section-center section"></section>
    </main>
  );
};

export default CheckoutPage;
