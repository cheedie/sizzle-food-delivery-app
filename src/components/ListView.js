import React from "react";
import { formatPrice } from "../utilis/helpers";
import { Link } from "react-router-dom";
import products_reducer from "../reducers/products_reducer";

const ListView = ({ products }) => {
  return (
    <section>
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
    </section>
  );
};

export default ListView;
