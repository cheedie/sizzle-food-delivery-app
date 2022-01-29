import React, { useState, useContext, useReducer } from "react";
import axios from "axios";
import reducer from "../reducers/products_reducer";
import { products_url as url } from "../utilis/constant";
import {
  SIDEBAR_CLOSE,
  SIDEBAR_OPEN,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
} from "../actions";

const initialState = {};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  return (
    <ProductsContext.Provider value="cart context">
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
