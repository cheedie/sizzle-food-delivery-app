import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CartProvider } from "./context/cart_context";
import { FilterProvider } from "./context/filter_context";
import { ProductsProvider } from "./context/products_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <ProductsProvider>
    <FilterProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FilterProvider>
  </ProductsProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
