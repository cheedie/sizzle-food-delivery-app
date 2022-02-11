import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { links } from "../utilis/constant";
import { FaBars } from "react-icons/fa";
import CartButtons from "./CartButtons";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";
const Navbar = () => {
  const { openSidebar } = useProductsContext();
  const { myUser } = useUserContext();
  return (
    <NavContainer className="nav-bar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} className="img-logo" alt="logo" />
          </Link>
          <button type="button" className="toggle-nav" onClick={openSidebar}>
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
          {myUser && (
            <li>
              <Link to="/checkout" className="nav-link">
                checkout
              </Link>
            </li>
          )}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  .toggle-container {
    display: none;
  }
  @media (min-width: 992px) {
    .toggle-container {
      display: grid;
    }
  }
`;

export default Navbar;
