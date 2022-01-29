import React, { useState, useContext, useReducer } from "react";
import reducer from "../reducers/cart_reducer";
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../actions";

const initialState = {};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  return <CartProvider value="cart context">{children}</CartProvider>;
};

export const userCartContext = () => {
  return useContext(CartContext);
};
