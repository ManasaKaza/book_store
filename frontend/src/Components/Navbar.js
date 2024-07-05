// import React from 'react'
// import { NavLink } from 'react-router-dom'
// export const Navbar = () => {
// const activepagestyle = ({ isActive }) => {
//   return {
//     color: isActive ? 'black' : 'grey',
//     fontSize: isActive ? '25px' : '18px',
//     paddingLeft: '50px',
//     fontFamily: "Times New Roman"
//   }
// }
//   return (
//     <div style={{ padding: '40px 100px 0px 100px  ' }}>
//       <div className="ui text menu">
// <NavLink to='/' style={activepagestyle} className="active item">
//   Home</NavLink>
//         <NavLink to='about' style={activepagestyle} className="item">
//           About
//         </NavLink>
//         <NavLink to='contactUs' style={activepagestyle} className="item">
//           ContactUs
//         </NavLink>
//         <input type="text" style={{ borderRadius: '10px' }} placeholder="   bookname or by author"></input>
//         <NavLink to='register' style={activepagestyle} className="item">
//           Register
//         </NavLink>
//       </div>
//       <hr style={{ marginTop: '30px' }}></hr>
//     </div>
//   )
// }

import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.jpeg";
import SearchBar from "./SearchBar";
import Cart from "./Cart";
import ThemeToggle from "./ThemeToggle";
import Register from "./Register";

export const Navbar = () => {
  useEffect(() => {
    const handleHover = (e) => {
      const navbarCollapse = document.getElementById("navbarNav");
      if (e.type === "mouseenter") {
        navbarCollapse.classList.add("show");
      } else {
        navbarCollapse.classList.remove("show");
      }
    };

    const activepagestyle = ({ isActive }) => {
      return {
        color: isActive ? "black" : "grey",
        fontSize: isActive ? "25px" : "18px",
        paddingLeft: "50px",
        fontFamily: "Times New Roman",
      };
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
                  to="/home"
                  exact
                  style={{ marginRight: "35px", fontSize: "2vh" }}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/about"
                  style={{ marginRight: "35px", fontSize: "2vh" }}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/contact"
                  style={{ marginRight: "35px", fontSize: "2vh" }}
                >
                  ContactUs
                </NavLink>
              </li>
            </ul>
            <SearchBar />
            <div className="d-flex flex-flow-row align-items-center">
              <Cart />
              <ThemeToggle />
              <Register />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
