import React from "react";
import { Link } from "react-router-dom";


import './Navigation.css';
function Navigation() {
  return (
    <nav className="navbar container navbar-light main-navbar">
      <Link to="/" className="navbar-brand main-navbar__nav-brand">
        STARLIGHT
      </Link>
    </nav>
  )
}

export default Navigation;
