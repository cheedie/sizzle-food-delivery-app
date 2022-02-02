import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utilis/constant";
import { formatPrice } from "../utilis/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";

const SingleProductPage = () => {
  // const { id } = useParams();
  // const {
  //   single_product_loading: loading,
  //   single_product_error: error,
  //   single_product: product,
  //   fetchSingleProduct,
  // } = useProductsContext();
  // useEffect(() => {
  //   fetchSingleProduct(`${url}${id}`);
  // }, [id]);
  // console.log(product);

  return <div>single product page</div>;
};

export default SingleProductPage;
