import React, { useState } from "react";
import "./css/heroSection.scss";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export default function HeroSection() {
  const [images, setImages] = useState([
    "/images/hero1.jpg",
    "/images/hero2.jpg",
    "/images/hero3.jpg",
  ]);
  const [selectedImg, setSelectedImg] = useState(0);

  const nextImg = () => {
    setSelectedImg((selectedImg + 1) % images.length);
  };

  const previousImg = () => {
    var i = (selectedImg - 1) % images.length;
    i = i < 0 ? images.length - 1 : i;
    setSelectedImg(i);
  };

  return (
    <div className="hero">
      <img
        src={images[selectedImg]}
        className="hero_background_img"
        alt="offers"
      />
      <div className="hero_top">
        <div className="hero_btn_left">
          <ArrowBackIosIcon onClick={previousImg} fontSize="large" />
        </div>
        <div className="hero_btn_right">
          <ArrowForwardIosIcon onClick={nextImg} fontSize="large" />
        </div>
      </div>
    </div>
  );
}
