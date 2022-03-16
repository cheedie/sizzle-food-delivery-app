import React from "react";
import Product4Page from "./Product4Page";
import styled from "styled-components";
const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className="grid-products-container">
        {products.map((product) => {
          return <Product4Page key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  img {
    height: 275px;
    width: 400px;
  }
  .grid-products-container {
    display: grid;
    gap: 2rem 3rem;
  }
  @media (min-width: 992px) {
    .grid-products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .grid-products-container {
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;
export default GridView;
