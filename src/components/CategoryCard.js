import React from "react";
import { Link } from "react-router-dom";
import "./css/categorycard.scss";

export default function CategoryCard() {
  return (
    <div className="category_card">
      <div className="category_card_inner_container">
        <h3 className="category_card_heading">
          Sandles: Casual styles for her{" "}
        </h3>
        <img
          src="/images/card1.jpg"
          alt="category"
          className="category_card_img"
        />
        <Link to="/" className="category_card_link">
          See more
        </Link>
      </div>
    </div>
  );
}
