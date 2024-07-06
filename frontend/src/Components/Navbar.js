import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.jpeg";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";
import Register from "./Register";

export const Navbar = ({ size }) => {
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
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <NavLink className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={logo}
              style={{
                marginLeft: "15px",
                marginTop: "5px",
                marginRight: "7px",
                marginBottom: "15px",
              }}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="Logo"
            />
            <span className="ml-2" style={{ marginRight: "250px" }}>
              BookStore
            </span>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            />
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
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="home"
                  exact
                  style={{ marginRight: "35px", fontSize: "2vh" }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="about"
                  style={{ marginRight: "35px", fontSize: "2vh" }}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="contact"
                  style={{ marginRight: "35px", fontSize: "2vh" }}
                >
                  ContactUs
                </NavLink>
              </li>
            </ul>
            <SearchBar />
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart" style={{ position: 'relative' }}>
                <span>
                  <i style={{ fontSize: "20px", marginRight: "20px" }} className="shopping cart icon"></i>
                </span>
                <span>{size}</span>
              </NavLink>
            </li>

            <ThemeToggle />
            <Register />
          </div>
        </div>
      </nav>
    </div>
  );
};