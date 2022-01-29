import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { links } from "../utilis/constant";
import { FaBars } from "react-icons/fa";
import CartButtons from "./CartButtons";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";
const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} className="img-logo" alt="logo" />
          </Link>
          <button type="button" className="toggle-nav">
            <FaBars />
          </button>
        </div>

        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url} className="nav-link">
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
        <CartButtons />
      </div>
    </nav>
  );
};

export default Navbar;
