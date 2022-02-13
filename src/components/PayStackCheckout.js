import React from "react";
import styled from "styled-components";

const CheckoutForm = () => {
  return <h2>hello from paystack checkout</h2>;
};

const PayStackCheckout = () => {
  return (
    <Wrapper>
      <CheckoutForm />
    </Wrapper>
  );
};

const Wrapper = styled.section``;
export default PayStackCheckout;
