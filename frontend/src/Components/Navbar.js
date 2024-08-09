import React, { useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";
import { CartContext } from "../Features/ContextProvider";

export const Navbar = () => {
  const { cart } = useContext(CartContext);

  useEffect(() => {
    const handleHover = (e) => {
      const navbarCollapse = document.getElementById("navbarNav");
      if (e.type === "mouseenter") {
        navbarCollapse.classList.add("show");
      } else {
        navbarCollapse.classList.remove("show");
      }
    };

    const navbarToggler = document.querySelector(".navbar-toggler");
    navbarToggler.addEventListener("mouseenter", handleHover);
    navbarToggler.addEventListener("mouseleave", handleHover);

    return () => {
      navbarToggler.removeEventListener("mouseenter", handleHover);
      navbarToggler.removeEventListener("mouseleave", handleHover);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={logo}
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
          <span className="ml-2">BookStore</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/home"
                exact
                style={{ marginRight: "35px", fontSize: "1rem" }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/about"
                style={{ marginRight: "35px", fontSize: "1rem" }}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/contact"
                style={{ marginRight: "35px", fontSize: "1rem" }}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <SearchBar />
          <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                <i className="shopping cart icon" style={{ fontSize: "20px" }}></i>
                {cart.length}
              </NavLink>
            </li>
            <li className="nav-item">
              <ThemeToggle />
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup" style={{ marginRight: "35px", fontSize: "1rem" }}>
                SignUp
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/logout" style={{ marginRight: "35px", fontSize: "1rem" }}>
                Logout
              </NavLink>
            </li>
            <li className="nav-item">
              <i className="user icon" style={{ fontSize: "20px", marginRight: "15px" }}></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
