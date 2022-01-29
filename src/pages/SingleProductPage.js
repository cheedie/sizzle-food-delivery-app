import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
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
  return <div>single product page</div>;
};

export default SingleProductPage;
