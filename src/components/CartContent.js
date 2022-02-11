import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import CartColums from "./CartColums";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  return (
    <section className="section section-center">
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
    </section>
  );
};

export default CartContent;
