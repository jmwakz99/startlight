import React from "react";
import { Link } from "react-router-dom";


import './Navigation.css';
function Navigation() {
  return (
    <nav className="navbar container navbar-light main-navbar">
      <Link to="/" className="navbar-brand main-navbar__nav-brand">
        <i className="fas fa-hotel"></i>
      </Link>
    </nav>
  )
}

export default Navigation;
