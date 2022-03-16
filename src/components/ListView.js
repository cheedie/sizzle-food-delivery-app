import React from "react";
import { formatPrice } from "../utilis/helpers";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import products_reducer from "../reducers/products_reducer";

const ListView = ({ products }) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, image, name, price, description } = product;
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <h5 className="price">{formatPrice(price)}</h5>
              <p>{description.substring(0, 150)}...</p>
              <Link to={`/products/${id}`} className="btn">
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;
  img {
    width: 100%;
    display: block;
    width: 400px;
    height: 400px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--grey-2);
    margin-bottom: 0.75rem;
  }
  p {
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;
export default ListView;
