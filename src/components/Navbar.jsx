import React from "react";
import './navbar.css';

const Navbar = () => {
  
    return (
      <nav className="navbar navbar-expand-lg  navbar-dark sticky-top" id="navbar">
        <div className="container-fluid">
          {/* Brand Name */}
          <a className="navbar-brand nav-head" href="#">CryptX</a>
  
          {/* Hamburger Button */}
          <button
            className="navbar-toggler toggle-btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          {/* Collapsible Menu */}
          <div className="collapse navbar-collapse mt-lg-0 mt-3" id="navbarSupportedContent">
            {/* Search Form */}
            <form className="d-flex ms-auto">
              <input className="form-control me-2" type="search" placeholder="Search Crypto" aria-label="Search" />
              <button className="btn btn-dark search" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  