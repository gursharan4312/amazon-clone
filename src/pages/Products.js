import React from "react";
import "./css/products.scss";
import FeaturedHeader from "../components/FeaturedHeader";
import FiltersSidebar from "../components/FiltersSidebar";
import ProductCard from "../components/ProductCard";

export default function Products() {
  return (
    <div className="products_container">
      <FeaturedHeader />
      <div className="products_body">
        <FiltersSidebar />
        <div className="all_products">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}
