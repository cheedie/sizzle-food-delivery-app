import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/">Home</Link>
          {product && <Link to="/products">/ Products</Link>}/ {title}
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-100);
  a {
    padding: 0.5rem;
    color: var(--primary-600);
    transition: var(--transition);
  }
  a:hover {
    color: var(--primary-900);
  }
`;

export default PageHero;
