import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./css/deals.scss";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export default function Deals() {
  const productsContainer = useRef(null);
  const scrollRight = () => {
    var h = productsContainer.current.offsetWidth;
    h = 0.4 * h;
    productsContainer.current.scrollLeft += h;
  };
  const scrollLeft = () => {
    var h = productsContainer.current.offsetWidth;
    h = 0.4 * h;
    productsContainer.current.scrollLeft -= h;
  };
  return (
    <div className="deals">
      <div className="deals_header">
        <span className="deals_header_heading">Today's deals</span>
        <Link to="/" className="deals_product_header_link">
          See all deals.
        </Link>
      </div>
      <div className="deals_body">
        <div className="deals_products" ref={productsContainer}>
          <div className="deals_product">
            <img
              src="/images/products/product1.jpg"
              className="deals_product_img"
            />
            <span className="deals_product_price">$20</span>
          </div>
          <div className="deals_product">
            <img
              src="/images/products/product1.jpg"
              className="deals_product_img"
            />
            <span className="deals_product_price">$20</span>
          </div>
          <div className="deals_product">
            <img
              src="/images/products/product1.jpg"
              className="deals_product_img"
            />
            <span className="deals_product_price">$20</span>
          </div>
          <div className="deals_product">
            <img
              src="/images/products/product1.jpg"
              className="deals_product_img"
            />
            <span className="deals_product_price">$20</span>
          </div>
          <div className="deals_product">
            <img
              src="/images/products/product1.jpg"
              className="deals_product_img"
            />
            <span className="deals_product_price">$20</span>
          </div>
          <div className="deals_product">
            <img
              src="/images/products/product1.jpg"
              className="deals_product_img"
            />
            <span className="deals_product_price">$20</span>
          </div>
          <div className="deals_product">
            <img
              src="/images/products/product1.jpg"
              className="deals_product_img"
            />
            <span className="deals_product_price">$20</span>
          </div>
          <div className="deals_product">
            <img
              src="/images/products/product1.jpg"
              className="deals_product_img"
            />
            <span className="deals_product_price">$20</span>
          </div>
          <div className="deals_product">
            <img
              src="/images/products/product1.jpg"
              className="deals_product_img"
            />
            <span className="deals_product_price">$20</span>
          </div>
          <div className="deals_product">
            <img
              src="/images/products/product1.jpg"
              className="deals_product_img"
            />
            <span className="deals_product_price">$20</span>
          </div>
          <div className="deals_product">
            <img
              src="/images/products/product1.jpg"
              className="deals_product_img"
            />
            <span className="deals_product_price">$20</span>
          </div>
          <div className="deals_product">
            <img
              src="/images/products/product1.jpg"
              className="deals_product_img"
            />
            <span className="deals_product_price">$20</span>
          </div>
        </div>
        <div className="deals_product_arrows">
          <div className="deals_product_arrow" onClick={scrollLeft}>
            <ArrowBackIosIcon />
          </div>
          <div className="deals_product_arrow" onClick={scrollRight}>
            <ArrowForwardIosIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
