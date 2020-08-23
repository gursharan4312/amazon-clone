import React, { useState } from "react";
import "./css/products.scss";
import FeaturedHeader from "../components/FeaturedHeader";
import FiltersSidebar from "../components/FiltersSidebar";
import ProductCard from "../components/ProductCard";
import QuickLookModal from "../components/QuickLookModal";

export default function Products() {
  const [showModal, setShowModal] = useState(false);
  const togggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <div className="products_container">
        <FeaturedHeader />
        <div className="products_body">
          <FiltersSidebar />
          <div className="all_products">
            <ProductCard togggleModal={togggleModal} />
            <ProductCard togggleModal={togggleModal} />
            <ProductCard togggleModal={togggleModal} />
            <ProductCard togggleModal={togggleModal} />
            <ProductCard togggleModal={togggleModal} />
            <ProductCard togggleModal={togggleModal} />
            <ProductCard togggleModal={togggleModal} />
            <ProductCard togggleModal={togggleModal} />
            <ProductCard togggleModal={togggleModal} />
            <ProductCard togggleModal={togggleModal} />
            <ProductCard togggleModal={togggleModal} />
            <ProductCard togggleModal={togggleModal} />
            <ProductCard togggleModal={togggleModal} />
            <ProductCard togggleModal={togggleModal} />
            <ProductCard togggleModal={togggleModal} />
            <ProductCard togggleModal={togggleModal} />
            <ProductCard togggleModal={togggleModal} />
            <ProductCard togggleModal={togggleModal} />
            <ProductCard togggleModal={togggleModal} />
            <ProductCard togggleModal={togggleModal} />
            <ProductCard togggleModal={togggleModal} />
            <ProductCard togggleModal={togggleModal} />
            <ProductCard togggleModal={togggleModal} />
            <ProductCard togggleModal={togggleModal} />
            <ProductCard togggleModal={togggleModal} />
          </div>
        </div>
      </div>
      {showModal && <QuickLookModal togggleModal={togggleModal} />}
    </>
  );
}
