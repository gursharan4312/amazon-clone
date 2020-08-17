import React from "react";
import "./css/filterSidebar.scss";

export default function FiltersSidebar() {
  return (
    <div className="filter_sidebar">
      <span className="filter_heading">Show results for</span>
      <div className="filter_type">
        <span className="filter_type_heading">Electronics</span>
        <ul>
          <li>Accessories &amp; Suppilies</li>
          <li>Accessories &amp; Suppilies</li>
          <li>Accessories &amp; Suppilies</li>
          <li>Accessories &amp; Suppilies</li>
          <li>Accessories &amp; Suppilies</li>
          <li>Accessories &amp; Suppilies</li>
          <li>Accessories &amp; Suppilies</li>
          <li>Accessories &amp; Suppilies</li>
          <li>Accessories &amp; Suppilies</li>
          <li>Accessories &amp; Suppilies</li>
          <li>Accessories &amp; Suppilies</li>
          <li>Accessories &amp; Suppilies</li>
          <li>Accessories &amp; Suppilies</li>
          <li>Accessories &amp; Suppilies</li>
          <li>Accessories &amp; Suppilies</li>
        </ul>
      </div>
      <div className="filter_rest">
        <span className="filter_rest_heading">Refined by</span>
        <div className="filter_rest_section">
          <span className="heading">Amazon Prime</span>
          <div className="filter_form">
            <div className="form_section">
              <input type="checkbox" value="prime" id="prime_input" />
              <label className="prime_icon" htmlFor="prime_input">
                prime
              </label>
            </div>
          </div>
        </div>
        <div className="filter_rest_section">
          <span className="heading">Shipping Option</span>
          <div className="filter_form">
            <div className="form_section">
              <span className="free_shipping">FREE Shipping</span>
            </div>
          </div>
        </div>
        <div className="filter_rest_section">
          <span className="heading">From Our Brands</span>
          <div className="filter_form">
            <div className="form_section">
              <input type="checkbox" value="prime" id="our_brand" />
              <label className="prime_icon" htmlFor="our_brand">
                Our Brand
              </label>
            </div>
          </div>
        </div>
        <div className="filter_rest_section">
          <span className="heading">Featured Brands</span>
          <div className="filter_form">
            <div className="form_section">
              <input type="checkbox" value="prime" id="featured_brand_1" />
              <label className="prime_icon" htmlFor="featured_brand_1">
                Our Brand
              </label>
            </div>
            <div className="form_section">
              <input type="checkbox" value="prime" id="prime_input" />
              <label className="prime_icon" htmlFor="prime_input">
                Our Brand
              </label>
            </div>
            <div className="form_section">
              <input type="checkbox" value="prime" id="prime_input" />
              <label className="prime_icon" htmlFor="prime_input">
                Our Brand
              </label>
            </div>
            <div className="form_section">
              <input type="checkbox" value="prime" id="prime_input" />
              <label className="prime_icon" htmlFor="prime_input">
                Our Brand
              </label>
            </div>
            <div className="form_section">
              <input type="checkbox" value="prime" id="prime_input" />
              <label className="prime_icon" htmlFor="prime_input">
                Our Brand
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
