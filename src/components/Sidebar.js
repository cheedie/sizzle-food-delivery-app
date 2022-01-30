import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { links } from "../utilis/constant";
import { FaTimes } from "react-icons/fa";
import CartButtons from "./CartButtons";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useUserContext } from "../context/user_context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useProductsContext();
  return (
    <SidebarContainer className="sidebar-container">
      <aside
        className={`${
          isSidebarOpen
            ? "sidebar-overlay show-sidebar-overlay"
            : "sidebar-overlay"
        }`}
      >
        <div className="sidebar-header">
          <img src={logo} alt="logo" className="img-logo" />
          <button
            className="sidebar-close"
            type="button"
            onClick={closeSidebar}
          >
            <FaTimes />
          </button>
        </div>
        <ul className="sidebar-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url} onClick={closeSidebar}>
                  {text}
                </Link>
              </li>
            );
          })}
          <li>
            <Link to="/checkout" onClick={closeSidebar}>
              checkout
            </Link>
          </li>
        </ul>
        <CartButtons />
      </aside>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  .button-container {
    margin: 2rem auto;
  }
`;
export default Sidebar;
