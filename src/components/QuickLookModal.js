import React from "react";
import { createPortal } from "react-dom";
import "./css/quickLookModal.scss";

const QuickLookModal = ({ togggleModal }) => {
  return createPortal(
    <>
      <div className="modal-background" />
      <div className="quick-look-modal">
        <div className="modal-close">
          <span onClick={togggleModal}>x</span>
        </div>
        <div className="modal-body">
          <div className="product-image">
            <img src="/images/products/product1.jpg" alt="product" />
          </div>
          <div className="product-details">
            <span className="product-name">Good glasses</span>
            <span className="product-price">$1000</span>
            <button className="product-details-btn">See product Details</button>
          </div>
        </div>
      </div>
    </>,
    document.querySelector("#portal")
  );
};

export default QuickLookModal;
