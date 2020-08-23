import React from "react";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import "./css/productsCard.scss";

export default function ProductCard({ togggleModal }) {
  return (
    <div className="product_card">
      <div className="product_img">
        <img
          src="/images/products/product1.jpg"
          className="product_img"
          alt="product"
        />
        <button onClick={togggleModal}>Quick Look</button>
      </div>
      <div className="product_price">
        <span>$14</span>
      </div>
      <div className="product_name">Cool Looking Glasses</div>
      <div className="product_ratings">
        <StarIcon />
        <StarIcon />
        <StarIcon />
        <StarHalfIcon />
        <StarBorderOutlinedIcon />
        <span className="rate_number">123</span>
      </div>
    </div>
  );
}
