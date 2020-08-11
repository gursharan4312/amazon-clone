import React from "react";
import HeroSection from "../components/HeroSection";
import CategoryCard from "../components/CategoryCard";
import Deals from "../components/Deals";
import "./css/home.scss";

export default function Home() {
  return (
    <div className="container">
      <HeroSection />
      <div className="home_content">
        <div className="categories_container">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
        <Deals />
        <Deals />
        <div className="categories_container">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
        <Deals />
        <Deals />
        <div className="categories_container">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
    </div>
  );
}
