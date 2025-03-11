import React, { useState } from "react";
import Logo from "../assets/img/logo.png";

export default function Header() {
  // State to manage the visibility of the search input box
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  // Function to toggle the search input box
  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <header className="main_menu home_menu">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand" href="index.html">
                <img src={Logo} alt="logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="menu_icon">
                  <i className="fas fa-bars" />
                </span>
              </button>
              <div
                className="collapse navbar-collapse main-menu-item"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about">
                      About
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="blog.html"
                      id="navbarDropdown_1"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Product
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown_1">
                      <a className="dropdown-item" href="/productlist">
                        Product List
                      </a>
                      <a className="dropdown-item" href="/productdetails">
                        Product Details
                      </a>
                    </div>
                  </li>
                  
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="hearer_icon d-flex align-items-center">
                {/* Search Button */}
                <a id="search_1" href="javascript:void(0)" onClick={toggleSearch}>
                  <i className="ti-search" />
                </a>
                <a href="cart.html">
                  <i className="flaticon-shopping-cart-black-shape" />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* Search Input Box */}
      {isSearchVisible && (
        <div className="search_input" id="search_input_box">
          <div className="container">
            <form className="d-flex justify-content-between search-inner">
              <input
                type="text"
                className="form-control"
                id="search_input"
                placeholder="Search Here"
              />
              <button type="submit" className="btn" />
              {/* Close Search Button */}
              <span
                className="ti-close"
                id="close_search"
                title="Close Search"
                onClick={toggleSearch}
              />
            </form>
          </div>
        </div>
      )}
    </header>
  );
}