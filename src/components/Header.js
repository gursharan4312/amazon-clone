import React from "react";
import "./css/header.scss";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

export default function Header() {
  return (
    <nav className="header">
      <Link to="/" className="header_logo">
        <img
          className="header_logo_img"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
        <span className="header_logo_extension">.ca</span>
      </Link>
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <div className="header_searchIconContainer">
          <SearchIcon className="header_searchIcon" />
        </div>
      </div>
      <div className="header_accountInfo">
        <span>Hello, Sign in</span>
        <span className="header_acccountInfo_subHeading">
          Account &amp; Lists
        </span>
      </div>
      <div className="header_orders">
        <span>Returns</span>
        <span className="header_acccountInfo_subHeading">&amp; Orders</span>
      </div>
      <div className="header_prime">
        <span>Try</span>
        <span className="header_acccountInfo_subHeading">Prime</span>
      </div>
      <div className="header_cart">
        <div
          className="header_icon_cart"
          style={{ clear: "left", float: "left" }}
        >
          <div
            className="cart-line-1"
            style={{ backgroundColor: "#fff" }}
          ></div>

          <div
            className="cart-line-2"
            style={{ backgroundColor: "#fff" }}
          ></div>
          <span className="header_cart_count">0</span>
          <div className="cart-wheel" style={{ backgroundColor: "#fff" }}></div>
        </div>
        <span className="header_acccountInfo_subHeading">Cart</span>
      </div>
    </nav>
  );
}
