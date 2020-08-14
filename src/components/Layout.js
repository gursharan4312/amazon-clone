import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./css/layout.scss";

export default function Layout({ children }) {
  return (
    <div className="app">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
