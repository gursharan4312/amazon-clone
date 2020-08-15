import React from "react";
import "./css/footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  return (
    <footer className="footer">
      <button className="footer_backTop" onClick={scrollToTop}>
        Back to top
      </button>
      <div className="foooter_main_links">
        <div className="footer_main_section">
          <h5>Get to Know Us</h5>
          <ul>
            <li>Careers</li>
            <li>Amazon and Our Planet</li>
            <li>Investor Relations</li>
            <li>Press Releases</li>
          </ul>
        </div>
        <div className="footer_main_section">
          <h5>Make Money with Us</h5>
          <ul>
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Acclerator</li>
            <li>Amazon Associates</li>
            <li>Sell on Amazon Handmade</li>
            <li>Advertise Your Product</li>
            <li>Independently Publish with Us</li>
          </ul>
        </div>
        <div className="footer_main_section">
          <h5>Amazon Payment Products</h5>
          <ul>
            <li>Amazon.ca rewards Mastercard</li>
            <li>Shop with Points</li>
            <li>Reload your Balance</li>
            <li>Amazon Currency Converter</li>
            <li>Gift Cards</li>
            <li>Amazon Cash</li>
          </ul>
        </div>
        <div className="footer_main_section">
          <h5>Let Us Help You</h5>
          <ul>
            <li>COVID-19 and Amazon</li>
            <li>Shipping Rates &amp; polices</li>
            <li>Amazon Prime</li>
            <li>Returns are Easy</li>
            <li>Manage your Content and Devices</li>
            <li>Customer Services</li>
          </ul>
        </div>
      </div>
      <div className="footer_logo_section">
        <Link to="/" className="footer_logo">
          <img
            className="footer_logo_img"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="logo"
          />
          <span className="foter_logo_extension">.ca</span>
        </Link>
      </div>
      <div className="footer_extra_links">
        <div className="footer_extra_link_section">
          <ul>
            <li>
              <span className="link_header">Amazon Music</span>
              <span className="link_details">Stream millions of songs </span>
            </li>
            <li>
              <span className="link_header">Goodreads</span>
              <span className="link_details">
                Books reviews and recomendations
              </span>
            </li>
          </ul>
        </div>
        <div className="footer_extra_link_section">
          <ul>
            <li>
              <span className="link_header">Amazon Advertising</span>
              <span className="link_details">
                find, attract and engage customers
              </span>
            </li>
            <li>
              <span className="link_header">IMDb</span>
              <span className="link_details">Movies,TV and Celebrities</span>
            </li>
            <li>
              <span className="link_header">Whole Foods Market</span>
              <span className="link_details">We believe in real food</span>
            </li>
          </ul>
        </div>
        <div className="footer_extra_link_section">
          <ul>
            <li>
              <span className="link_header">Amazon Drive</span>
              <span className="link_details">Cloud storage from Amazon</span>
            </li>
            <li>
              <span className="link_header">Amazon photos</span>
              <span className="link_details">
                Unlimited Photo Sotrage free with Prime
              </span>
            </li>
            <li>
              <span className="link_header">Amazon Renewed</span>
              <span className="link_details">
                Like-new products you can trust
              </span>
            </li>
          </ul>
        </div>
        <div className="footer_extra_link_section">
          <ul>
            <li>
              <span className="link_header">Amazon Web Services</span>
              <span className="link_details">
                Scalable Cloud Computing Services
              </span>
            </li>
            <li>
              <span className="link_header">Shopbop</span>
              <span className="link_details">Desiner Fashion Brands</span>
            </li>
            <li>
              <span className="link_header">Amazon Second Chance</span>
              <span className="link_details">
                Pass it on, trade it in, give it a second life
              </span>
            </li>
          </ul>
        </div>
        <div className="footer_extra_link_section">
          <ul>
            <li>
              <span className="link_header">Book Depository</span>
              <span className="link_details">
                Books with free delivery worldwide
              </span>
            </li>
            <li>
              <span className="link_header">Warehouse Deals</span>
              <span className="link_details">Open box Discounts</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
